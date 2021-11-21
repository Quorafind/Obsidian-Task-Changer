import { Editor, App, Menu, Plugin, MarkdownView } from "obsidian";
import { wait } from "src/util/util";
import { Task } from "../settings/settingsData";
import addIcons from "src/icons/customIcons";
import { TaskSettingTab } from "../settings/settingsTab";
import { TaskSettings } from "../settings/settingsData";
import  DEFAULT_SETTINGS  from "../settings/settingsData";
import contextMenu from "src/plugin/contextMenu";
import taskChangerMenu from "src/ui/taskChangerMenu";
import {
  REGEX_OL,
  REGEX_UL,
} from "../util/regex";
import { getSelection, prefixLines, restoreCursor } from "../util/codemirror";

const UL_OL= "^(\\s*)[-*] \\[[ xX\\->D\\?\\/\\+R\\!iBPC]\\] ";

interface AddPrefix {
  replace?: string[];
  prefix?: string;
}

interface ChangePrefix {
  searches?: string[];
  cprefix?: string;
}

interface TogglePrefix extends AddPrefix, ChangePrefix {
  add?: (options: AddPrefix) => void;
  change?: (options: ChangePrefix) => void;
}

export default class taskChangerPlugin extends Plugin {
  app: App;
  editor: Editor;
  settings: TaskSettings;

  async onload() {
    console.log("taskChanger v" + this.manifest.version + " loaded");
    addIcons();
    await this.loadSettings();
    this.registerEvent(
      this.app.workspace.on("editor-menu", this.handletaskChangerMenu)
    );
    this.addSettingTab(new TaskSettingTab(this.app, this));
    this.addCommand({
      id: "taskChanger-plugin-menu",
      name: "Open taskChanger",
      icon: "changeTaskStatus",
      callback: async () => {
        !document.querySelector(".menu.taskChangerContainer")
          ? taskChangerMenu(this.app, this, this.settings)
          : true;
      },
    });

    addEventListener("taskChanger-NewCommand", () => {
      this.generateCommands(this.editor);
    });
    this.generateCommands(this.editor);
    this.refresh();
  }

  getActiveEditor = (): Editor | null => {
    const { workspace } = this.app;
    const activeView = workspace.getActiveViewOfType(MarkdownView);

    //@ts-ignore
    return activeView?.sourceMode?.cmEditor || null;
  };


  /**
   * Adds a prefix to the current selection or line
   *
   * replace: list of RegEx prefix patterns
   *          that should be replaced if they already exist
   *
   * prefix: the string prefix to add
   */
   addPrefix = ({ replace = [], prefix = "" }: AddPrefix): void => {
    const editor = this.getActiveEditor();
    if (!editor) {
      return;
    }


    const selection = getSelection(editor);
    const { start, end, content } = selection;

    const updatedContent = prefixLines({
      content,
      prefix,
      replace,
      preserveIndent: true,
    });
    editor.replaceRange(updatedContent, start, end);
    restoreCursor(selection, content, updatedContent);
  };

  /**
   * Removes prefixes from the current selection or line
   *
   * searches: list of RegEx prefix patterns
   *           that should be removed. Defaults to all prefixes
   */
  // changePrefix = ({ searches = PREFIXES, cprefix = "" }: ChangePrefix = {}): void => {
  //   const editor = this.getActiveEditor();
  //   if (!editor) {
  //     return;
  //   }

  //   const selection = getSelection(editor);
  //   const { start, end, content } = selection;
  //   const updatedContent = content.replace(buildRegex(searches), cprefix);
  //   editor.replaceRange(updatedContent, start, end);
  //   restoreCursor(selection, content, updatedContent);
  // };

  togglePrefix = ({
    searches = [],
    replace = [],
    prefix = "",
    // change,
    add,
  }: TogglePrefix): void => {
    
    const editor = this.getActiveEditor();
    if (!editor) {
      return;
    }
    const selection = getSelection(editor);
    const { content } = selection;
    // const cprefix = prefix;

    (add || this.addPrefix)({
      replace: [...searches, ...replace],
      prefix,
    });

    // if (
    //   content
    //     .split("\n")
    //     .every((line) => matches(line, buildRegex(searches || [prefix])))
    // ) {
    //   // full match, remove prefixes
    //   // (change || this.changePrefix)({ 
    //   //   searches,
    //   //   cprefix,
    //   // });
    // } else {
    //   // partially or no match. Add prefixes
    //   (add || this.addPrefix)({
    //     replace: [...searches, ...replace],
    //     prefix,
    //   });
    // }
  };

  generateCommands(editor: Editor) {
    this.settings.Tasks.forEach((taskChanger: Task) => {

      const applyCommand = (command: CommandPlot, editor: Editor) => {
        const searches = command.searches;
        const prefix = command.prefix;
        const replace = command.replace;

        this.togglePrefix({
          searches,
          prefix,
          replace,
        });

      }

      type CommandPlot = {
        searches: [string],
        prefix: string,
        replace: [string,string],
      };

      type commandsPlot = {
        [key: string]: CommandPlot;
      };

      const commandsMap: commandsPlot = {
        task: {
          searches: [UL_OL],
          prefix: taskChanger.value,
          replace: [REGEX_OL,REGEX_UL]
        },
      };
      Object.keys(commandsMap).forEach((type) => {
        this.addCommand({
          id: `${taskChanger.status}`,
          name: taskChanger.status,
          icon: `changeTaskStatus`,
          editorCallback: async (editor: Editor) => {
            applyCommand(commandsMap[type], editor);
            await wait(10);
            editor.focus();
          },
        });
      });
    });
  }

  refresh = () => {
    this.updateStyle();
  };

  updateStyle = () => {
    //todo
  };

  onunload() {
    console.log("taskChanger unloaded");
  }

  handletaskChangerMenu = (menu: Menu, editor: Editor): void => {
    contextMenu(this.app, menu, editor, this, this.settings);
  };

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

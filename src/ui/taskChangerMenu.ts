import type taskChangerPlugin from "src/plugin/main";
import { App, Menu, Notice,Editor} from "obsidian";
import { TaskSettings } from "src/settings/settingsData";

const taskChangerMenu = (
  app: App,
  plugin: taskChangerPlugin,
  settings: TaskSettings,
  editor: Editor,
  evt: MouseEvent,
): void => {
  if (editor && editor.hasFocus()) {
    // const selection = document.getSelection();
    // const selectionContainer = selection.getRangeAt(0)
    //   .commonAncestorContainer as HTMLElement;
    // const selectionRect = selectionContainer.parentElement.getClientRects()[0];
    const menu = new Menu(plugin.app).addItem((item) => {
      const itemDom = (item as any).dom as HTMLElement;
      itemDom.setAttribute("style", "display: none");
    });

    const menuDom = (menu as any).dom as HTMLElement;
    menuDom.addClass("taskChangerContainer");

    settings.Tasks.forEach((Tasks) => {
      const taskButton = menuDom.createEl("div");
      taskButton.setAttribute("id", `${Tasks.status}`);

      taskButton.addEventListener("click", function (event) {
        //@ts-ignore
        app.commands.executeCommandById(
          `taskChanger-plugin:${Tasks.status}`
        );
      });

      const taskButtonIcon = taskButton.createEl("span");
      taskButtonIcon.innerHTML = Tasks.icon;
      taskButtonIcon.setAttribute(
        "style",
        "margin-right: 10px; vertical-align: -.15em; display: inline-flex;"
      );
      taskButtonIcon.style.fill = Tasks.value;

      const taskButtonText = taskButton.createEl("span");
      taskButtonText.innerHTML = Tasks.status;
      taskButtonText.setAttribute("style", "font-weight: 400;");
    });

    menu.showAtPosition({
      x: evt.x - 30,
      y: evt.y - 15,
    });
  } else {
    new Notice("Focus must be in editor");
  }
}

export default taskChangerMenu;
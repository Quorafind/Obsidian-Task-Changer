import type taskChangerPlugin from "src/plugin/main";

import { App, Menu, Notice,Editor} from "obsidian";
import { TaskSettings } from "src/settings/settingsData";

export interface Coords {
  top: number;
  left: number;
  bottom: number;
}

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

    const cursor = editor.getCursor('from');
    const line = editor.getLine(cursor.line);

    let coords: Coords;

    // Get the cursor position using the appropriate CM5 or CM6 interface
    if ((editor as any).cursorCoords) {
        coords = (editor as any).cursorCoords(true, 'window');
    } else if ((editor as any).coordsAtPos) {
        const offset = editor.posToOffset(cursor);
        coords = (editor as any).cm.coordsAtPos?.(offset) ?? (editor as any).coordsAtPos(offset);
    } else {
        return;
    }

    console.log(coords);

    menu.showAtPosition({
      x: coords.left,
      y: coords.top,
    });
  } else {
    new Notice("Focus must be in editor");
  }
}

export default taskChangerMenu;
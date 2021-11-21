import type taskChangerPlugin from "src/plugin/main";
import { App, Menu, MarkdownView } from "obsidian";
import { TaskSettings } from "src/settings/settingsData";

export default function taskChangerMenu(
  app: App,
  plugin: taskChangerPlugin,
  settings: TaskSettings
) {
  const activeView = app.workspace.getActiveViewOfType(MarkdownView);

  if (activeView && activeView.editor.hasFocus()) {
    const selection = document.getSelection();
    const selectionContainer = selection.getRangeAt(0)
      .commonAncestorContainer as HTMLElement;
    const selectionRect = selectionContainer.getClientRects()[0];
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
      x: selectionRect.right + 5,
      y: selectionRect.top + 15,
    });
  } else {
    return;
  }
}

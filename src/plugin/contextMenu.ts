import type { App, Editor } from "obsidian";
import type taskChangerPlugin from "src/plugin/main";
import { Menu } from "obsidian";
import { TaskSettings } from "src/settings/settingsData";
import taskChangerMenu from "src/ui/taskChangerMenu";

export default function contextMenu(
  app: App,
  menu: Menu,
  editor: Editor,
  plugin: taskChangerPlugin,
  settings: TaskSettings,
): void {

  menu.addItem((item) => {
    const itemDom = (item as any).dom as HTMLElement;
    itemDom.addClass("taskChanger-button");
    item
      .setTitle("Change Task Status")
      .setIcon("changeTaskStatus")
      .onClick(async (evt: MouseEvent) => {
        taskChangerMenu(app, plugin, settings, editor,evt);
      });
  });
}

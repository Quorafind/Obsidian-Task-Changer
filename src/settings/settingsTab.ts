import type taskChangerPlugin from "src/plugin/main";
import { App, Setting, PluginSettingTab, Notice, TextComponent } from "obsidian";
import Sortable from "sortablejs";

export class TaskSettingTab extends PluginSettingTab {
  plugin: taskChangerPlugin;
  appendMethod: string;

  constructor(app: App, plugin: taskChangerPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h1", { text: "Task Status Changer" });
    containerEl.createEl("h2", { text: "Plugin Settings" });

    // const taskChangerSetting = new Setting(containerEl);

    // taskChangerSetting
    //   .setName("Choose highlight statuss")
    //   .setClass("taskChangerplugin-setting-item")
    //   .setDesc(
    //     `Create new highlight statuss by providing a status name and using the status picker to set the hex code value. Don't forget to save the status before exiting the status picker. Drag and drop the highlight status to change the order for your taskChanger component.`
    //   );

    // const statusInput = new TextComponent(taskChangerSetting.controlEl);
    // statusInput.setPlaceholder("status name");
    // statusInput.inputEl.addClass("taskChanger-settings-status");

    // const valueInput = new TextComponent(taskChangerSetting.controlEl);
    // valueInput.setPlaceholder("icon: svg");
    // valueInput.inputEl.addClass("taskChanger-settings-value");

    // const iconInput = new TextComponent(taskChangerSetting.controlEl);
    // valueInput.setPlaceholder("value: - [ ]");
    // valueInput.inputEl.addClass("taskChanger-settings-value");

    // taskChangerSetting
    //   .addButton((button) => {
    //     button
    //       .setClass("taskChangerSettingsButton")
    //       .setClass("taskChangerSettingsButtonAdd")
    //       .setIcon("taskChangerSave")
    //       .setTooltip("Save")
    //       .onClick(async (buttonEl: any) => {
    //         let status = statusInput.inputEl.value;
    //         let value = valueInput.inputEl.value;
    //         let icon = iconInput.inputEl.value;

    //         let task = [status, value, icon]

    //         if (status && value) {
    //           if (!this.plugin.settings.taskChangerOrder.includes(status)) {
    //             this.plugin.settings.taskChangerOrder.push(status);
    //             this.plugin.settings.Tasks[status,icon,value] = task[];
    //             setTimeout(() => {
    //               dispatchEvent(new Event("taskChanger-NewCommand"));
    //             }, 100);
    //             await this.plugin.saveSettings();
    //             this.display();
    //           } else {
    //             buttonEl.stopImmediatePropagation();
    //             new Notice("This status already exists");
    //           }
    //         } else if (status && !value) {
    //           new Notice("Highlighter hex code missing");
    //         } else if (!status && value) {
    //           new Notice("Highlighter name missing");
    //         } else {
    //           new Notice("Highlighter values missing");
    //         }
    //       });
    //   });

    // const taskChangersContainer = containerEl.createEl("div", {
    //   cls: "taskChangerSettingsTabsContainer",
    // });

    // Sortable.create(taskChangersContainer, {
    //   animation: 500,
    //   ghostClass: "taskChanger-sortable-ghost",
    //   chosenClass: "taskChanger-sortable-chosen",
    //   dragClass: "taskChanger-sortable-drag",
    //   dragoverBubble: true,
    //   forceFallback: true,
    //   fallbackClass: "taskChanger-sortable-fallback",
    //   easing: "cubic-bezier(1, 0, 0, 1)",
    //   onSort: (command) => {
    //     const arrayResult = this.plugin.settings.taskChangerOrder;
    //     const [removed] = arrayResult.splice(command.oldIndex, 1);
    //     arrayResult.splice(command.newIndex, 0, removed);
    //     this.plugin.settings.taskChangerOrder = arrayResult;
    //     this.plugin.saveSettings();
    //   },
    // });

    // this.plugin.settings.taskChangerOrder.forEach((taskChanger) => {
    //   const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=${this.plugin.settings.taskChangers[taskChanger]} stroke=${this.plugin.settings.taskChangers[taskChanger]} stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M20.707 5.826l-3.535-3.533a.999.999 0 0 0-1.408-.006L7.096 10.82a1.01 1.01 0 0 0-.273.488l-1.024 4.437L4 18h2.828l1.142-1.129l3.588-.828c.18-.042.345-.133.477-.262l8.667-8.535a1 1 0 0 0 .005-1.42zm-9.369 7.833l-2.121-2.12l7.243-7.131l2.12 2.12l-7.242 7.131zM4 20h16v2H4z"/></svg>`;
    //   const settingItem = taskChangersContainer.createEl("div");
    //   settingItem.addClass("taskChanger-item-draggable");
    //   const statusIcon = settingItem.createEl("span");
    //   statusIcon.addClass("taskChanger-setting-icon");
    //   statusIcon.innerHTML = icon;

    //   new Setting(settingItem)
    //     .setClass("taskChanger-setting-item")
    //     .setName(taskChanger)
    //     .setDesc(this.plugin.settings.Tasks[taskChanger])
    //     .addButton((button) => {
    //       button
    //         .setClass("taskChangerSettingsButton")
    //         .setClass("taskChangerSettingsButtonDelete")
    //         .setIcon("taskChangerDelete")
    //         .setTooltip("Remove")
    //         .onClick(async () => {
    //           new Notice(`${taskChanger} highlight deleted`);
    //           (this.app as any).commands.removeCommand(
    //             `taskChanger-plugin:${taskChanger}`
    //           );
    //           delete this.plugin.settings.Tasks[taskChanger];
    //           this.plugin.settings.taskChangerOrder.remove(taskChanger);
    //           setTimeout(() => {
    //             dispatchEvent(new Event("taskChanger-NewCommand"));
    //           }, 100);
    //           await this.plugin.saveSettings();
    //           this.display();
    //         });
    //     });

    //   const a = createEl("a");
    //   a.setAttribute("href", "");
    // });
  }
}

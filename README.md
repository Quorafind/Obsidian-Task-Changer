# taskChanger-Plugin

![taskChanger-Plugin Downloads](https://img.shields.io/github/downloads/chetachiezikeuzor/taskChanger-Plugin/total.svg)
![taskChanger-Plugin Releases](https://img.shields.io/github/v/release/chetachiezikeuzor/taskChanger-Plugin)

<img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/taskChanger%20Demo%20Header.png" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

### Status: This plugin will be available in Obsidian plugin store once it has been accepted

_Sigh_. Don't you wish you could satiate your creative drive by highlighting your notes? I mean, yes we can use the markdown syntax for creating highlights, but what about custom colors?? Oh yea, we know all about those cool CSS hacks that would "support" this, but what ever happened to avoiding proprietary formatting? Ok, well we could just use HTML `<mark>` tags right? But jeez, it's such a pain to type out! Alright alright, how about a Templater template? [Kinda like this one](https://www.reddit.com/r/ObsidianMD/comments/nu0olr/multicolored_highlighting_in_obsidian/). But this just doesn't feel… native. Well, looks like taskChanger is here to save the day!!!

taskChanger is a simple plugin that brings a minimal and aesthetically pleasing highlighting menu into the Obsidian note-taking app. This plugin makes color-coded highlighting much easier with a user-friendly assortment of highlight colors.

## Demo

<img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/taskChanger-demo.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

## Ease of Use

Make beautiful highlights in your notes to supplement your note-taking. The colors included were chosen to be universal across themes, in both light and dark mode. The use of inline CSS is essential in maintaining the longevity of your notes. When you export, you will not be reliant on any external CSS styling. This will make your notes much more flexible!

## How it Works

Although the plugin supplies you with a beautiful assortment of colors, you are free to customize your taskChanger menu as you wish! Create new taskChanger colors by openning the plugin settings tab. There, you will see an input, color picker and an `add` button. Use the input to set the name of your brand new highlight, then use the color picker to pick the color for said highlight. Then use the `add` button to add the color into your taskChanger menu.

<img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/image2.png" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

<img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/taskChangerdemo1.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

Obsidian app version 12.8 adds a powerful custom context menu for easier note-taking. This plugin adds 2 menu items: Highlight and Unhighlight. These menu items can only be seen on text selection. Clicking "Highlight" will trigger the highlighting menu, allowing you to choose from an assortment of colors. When you choose a color, your selected text will then be wrapped within HTML mark tags, including a color for the background that corresponds with the color you have chosen. Clicking "Unhighlight" will replace text that is within the string `<`, `/>`. That means that you can use this to remove HTML markings, and not just highlight marks.

<img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/taskChanger-demo.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

<img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/image1.png" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

You can also use the new command added in version [1.0.0]() to open your highlighlighter menu. Now, you can open your highlighting menu with a hotkey of your choosing. You will be able to add hotkeys to each individual taskChanger color from your taskChanger menu, as the plugin creates command for each taskChanger as well.

<img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/taskChangerdemo2.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

<img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/taskChanger.png" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

## Disclaimer

This plugin will not work with [cMenu plugin](https://github.com/chetachiezikeuzor/cMenu-Plugin).

## Installation

This plugin is not yet available in the Obsidian community plugin store. You can install it from there once it has been accepted. For a manual installation, you can download the necessary files and place them within your plugins folder.

---

## Changelog

### [1.0.0](https://github.com/chetachiezikeuzor/taskChanger-Plugin/releases/tag/1.0.0) - Oct 10, 2021

##### Added

- Added new setting to customize taskChanger colors.
  <img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/taskChangerdemo1.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">
- Added command to open taskChanger palette
- Added function to add commands per taskChanger
  <img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/taskChangerdemo2.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

### [1.0.1](https://github.com/chetachiezikeuzor/taskChanger-Plugin/releases/tag/1.0.1) - Oct 12, 2021

##### Added

- Function to remove commands automatically from command library after color deletion.

##### Fixed

- Bug: Check added to see that activeView isn't null

### [1.1.0](https://github.com/chetachiezikeuzor/taskChanger-Plugin/releases/tag/1.1.0) - Oct 14, 2021

##### Added

- Added command to remove highlight (`<mark>`)
  <img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/removehighlightcommand.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

##### Changed

- Updated undo highlight functionality
  <img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/undohighlight.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">
- Creating empty highlight now adds space at the end
  <img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/addedspace.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

### [1.1.1](https://github.com/chetachiezikeuzor/taskChanger-Plugin/releases/tag/1.1.1) - Oct 15, 2021

##### Changed

- Updated logic to cursor repositioning
  <img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/betterCursorPos.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

---

## Checklist

- [x] taskChanger color commands
- [x] Open taskChanger palette with command
- [x] Unhighlight with command
- [x] Undo highlight functionality
- [x] Customize taskChanger colors

---

## Support

If you like this Plugin and are considering donating to support continued development, use the button below!

Created with ❤️ by Chetachi

<a href="https://www.buymeacoffee.com/chetachi"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&amp;emoji=&amp;slug=chetachi&amp;button_colour=e3e7ef&amp;font_colour=262626&amp;font_family=Inter&amp;outline_colour=262626&amp;coffee_colour=ff0000"></a>

<a href="https://paypal.me/chelseaezikeuzor">
<img src="https://raw.githubusercontent.com/chetachiezikeuzor/taskChanger-Plugin/master/assets/paypal.svg" height="70"></a>

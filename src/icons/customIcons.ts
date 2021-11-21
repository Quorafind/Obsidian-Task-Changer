import { addIcon } from "obsidian";

const icons: Record<string, string> = {
  changeTaskStatus: `<svg t="1637072255349" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4250" width="100" height="100"><path d="M662.75 440.612c15.863-17.426 42.848-18.693 60.274-2.83 17.426 15.861 18.693 42.847 2.831 60.273L527.617 715.832c-16.55 18.18-45 18.65-62.14 1.026l-112.064-115.23c-16.429-16.894-16.053-43.906 0.84-60.335 16.893-16.428 43.905-16.052 60.334 0.84l80.45 82.724 167.714-184.245zM697.653 256c-23.565 0-42.667-19.103-42.667-42.667s19.102-42.666 42.667-42.666h124.651c40.288 0 73.697 31.956 73.697 72.347v85.783c0 23.564-19.103 42.667-42.667 42.667s-42.666-19.103-42.666-42.667V256H697.652z m113.015 597.333V449.167c0-23.564 19.102-42.667 42.666-42.667 23.564 0 42.667 19.103 42.667 42.667v417.152c0 40.391-33.41 72.348-73.697 72.348H201.697c-40.288 0-73.697-31.957-73.697-72.348V243.014c0-40.39 33.41-72.347 73.697-72.347h124.727c23.564 0 42.667 19.102 42.667 42.666 0 23.564-19.103 42.667-42.667 42.667h-113.09v597.333h597.333z m-384-682.666c-23.564 0-42.667 19.102-42.667 42.666C384 236.897 403.103 256 426.667 256h170.666C620.897 256 640 236.897 640 213.333s-19.103-42.666-42.667-42.666H426.667z m0-85.334h170.666c70.693 0 128 57.308 128 128 0 70.693-57.307 128-128 128H426.667c-70.693 0-128-57.307-128-128 0-70.692 57.307-128 128-128z" p-id="4251" fill="#707070"></path></svg>`,
};
export default function addIcons() {
  Object.keys(icons).forEach((key) => {
    addIcon(key, icons[key]);
  });
}

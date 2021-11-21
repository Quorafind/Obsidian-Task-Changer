export interface Task {
  status: string;
  icon: string;
  value: string;
}

export interface TaskSettings {
  Tasks: Task[];
  taskChangerOrder: string[];
}

/**
 *  [ ] Unchecked
    [x] Regular
    [X] Checked
    [-] Dropped
    [>] Forward
    [D] Defer
    [?] Question
    [/] Half Done
    [+] Add
    [R] Research
    [!] Important
    [i] Idea
    [B] Brainstorm
    [P] Pro
    [C] Con
 */

const DEFAULT_SETTINGS: TaskSettings = {
  Tasks: [
    {
      status: "Unchecked",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 448 512'><path d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z' fill='currentColor'/></svg>",
      // value: "^(\\s*)[-*] \\[[ ]\\] ",
      value: "- [ ] ",
    },
    {
      status: "Regular",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 448 512'><path d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z' fill='currentColor'/></svg>",
      // value: "^(\s*)[-*] \\[[x]\\] ",
      value: "- [x] ",
    },
    {
      status: "Checked",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='1 0 17 17'><path d='M13.5 2L6 9.5L2.5 6L0 8.5l6 6l10-10z' fill='currentColor'/></svg>",
      // value: "^(\\s*)[-*] \\[[X]\\] ",
      value: "- [X] ",
    },
    {
      status: "Dropped",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 1200 1200'><path d='M0 430.078h1200v339.844H0V430.078z' fill='currentColor'/></svg>",
      // value: "^(\\s*)[-*] \\[-\\] ",
      value: "- [-] ",
    },
    {
      status: "Forward",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 2 24 24'><path d='M13.761 12.01l-10.76-1.084L3 4.074a1.074 1.074 0 0 1 1.554-.96l15.852 7.926a1.074 1.074 0 0 1 0 1.92l-15.85 7.926a1.074 1.074 0 0 1-1.554-.96v-6.852l10.76-1.064z' fill='currentColor' fill-rule='nonzero'/></svg>",
      // value: "^(\\s*)[-*] \\[>\\] ",
      value: "- [>] ",
    },
    {
      status: "Defer",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='1 2 24 24'><path d='M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 7h14v2H5V7z' fill='currentColor'/></svg>",
      // value: "^(\\s*)[-*] \\[[D]\\] ",
      value: "- [D] ",
    },
    {
      status: "Question",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='-2 0 24 24'><path d='M11.403 18.751v4.499c-.01.41-.34.74-.748.75H6.159a.768.768 0 0 1-.749-.748v-4.5c.01-.41.34-.739.749-.749h4.5c.41.01.74.34.75.749v.001zm5.923-11.247a6.306 6.306 0 0 1-.962 3.354l.015-.026a5.462 5.462 0 0 1-1.021 1.108l-.01.008c-.321.282-.672.55-1.042.794l-.036.022q-.413.253-1.144.665a3.71 3.71 0 0 0-1.275 1.204l-.009.014a2.535 2.535 0 0 0-.515 1.243l-.001.012a.978.978 0 0 1-.226.611l.001-.002a.652.652 0 0 1-.524.29h-4.5a.563.563 0 0 1-.479-.343l-.001-.004a1.394 1.394 0 0 1-.197-.702v-.845a4.356 4.356 0 0 1 1.219-2.935l-.001.001A7.945 7.945 0 0 1 9.251 9.96l.048-.02a4.627 4.627 0 0 0 1.574-1.049l.001-.001a2.094 2.094 0 0 0 .469-1.429v.005a1.695 1.695 0 0 0-.863-1.382l-.009-.004a3.436 3.436 0 0 0-2.018-.599h.003a3.53 3.53 0 0 0-2.039.552l.014-.009A12.825 12.825 0 0 0 4.45 8.149l-.025.035a.73.73 0 0 1-.581.3a.897.897 0 0 1-.472-.152l.003.002L.301 5.991a.732.732 0 0 1-.29-.464L.01 5.523a.747.747 0 0 1 .105-.527l-.002.003C1.77 2 4.912.003 8.522.003c.103 0 .205.002.307.005h-.015a8.362 8.362 0 0 1 3.074.602l-.057-.02a10.2 10.2 0 0 1 2.757 1.571l-.02-.016a7.838 7.838 0 0 1 1.966 2.349l.02.041c.483.857.768 1.881.769 2.971z' fill='currentColor'/></svg>",
      // value: "^(\\s*)[-*] \\[\\?\\] ",
      value: "- [?] ",
    },
    {
      status: "HalfDone",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 557 558'><path d='M1.5,0.5 556.5,0.5 1.5,556.5 1.5,556 1.5,1' fill='currentColor'/></svg>",
      // value: "^(\\s*)[-*] \\[\\/\\] ",
      value: "- [/] ",
    },
    {
      status: "Add",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='14' height='14' preserveAspectRatio='xMidYMid meet' viewBox='0 0 1250 1250'><path d='M430.078 0v430.078H0v339.844h430.078V1200h339.844V769.922H1200V430.078H769.922V0H430.078z' fill='currentColor'/></svg>",
      // value: "^(\\s*)[-*] \\[\\+\\] ",
      value: "- [+] ",
    },
    {
      status: "Research",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='16' height='15' preserveAspectRatio='xMidYMid meet' viewBox='0 0 1330 1330'><g transform='translate(1200 0) scale(-1 1)'><path d='M672.633 0C389.326 0 159.634 229.652 159.634 512.958c0 100.662 28.986 194.563 79.083 273.79c-.368.16-.729.305-1.098.471l-223.21 223.172L204.019 1200l231.249-231.288c-.069-.326-.162-.651-.234-.979c71.035 37.19 151.865 58.224 237.6 58.224c283.309 0 512.959-229.69 512.959-512.997C1185.59 229.652 955.939 0 672.633 0zm0 227.877c157.441 0 285.041 127.639 285.041 285.081s-127.6 285.081-285.041 285.081c-157.442 0-285.082-127.639-285.082-285.081S515.19 227.877 672.633 227.877z' fill='currentColor'/></g></svg>",
      // value: "^(\\s*)[-*] \\[[R]\\] ",
      value: "- [R] ",
    },
    {
      status: "Important",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='14' height='14' preserveAspectRatio='xMidYMid meet' viewBox='0 0 448 1408'><g transform='translate(448 0) scale(-1 1)'><path d='M416 1120v224q0 26-19 45t-45 19H96q-26 0-45-19t-19-45v-224q0-26 19-45t45-19h256q26 0 45 19t19 45zM446 64l-28 768q-1 26-20.5 45T352 896H96q-26 0-45.5-19T30 832L2 64Q1 38 19.5 19T64 0h320q26 0 44.5 19T446 64z' fill='currentColor'/></g></svg>",
      // value: "^(\\s*)[-*] \\[\\!\\] ",
      value: "- [!] ",
    },
    {
      status: "Idea",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='1 2 24 24'><path d='M11 18H7.941c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1 1 12.49.002c-.55.685-1.888 1.726-2.185 2.998H13v-5h-2v5zm5 2v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1h8z' fill='currentColor'/></svg>",
      // value: "^(\\s*)[-*] \\[[i]\\] ",
      value: "- [i] ",
    },
    {
      status: "Brainstorm",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='3 3 22 22'><rect x='0' y='0' width='24' height='24' fill='none' stroke='none' /><circle cx='7.2' cy='14.4' r='3.2' fill='currentColor'/><circle cx='14.8' cy='18' r='2' fill='currentColor'/><circle cx='15.2' cy='8.8' r='4.8' fill='currentColor'/></svg>",
      // value: "^(\\s*)[-*] \\[[B]\\] ",
      value: "- [B] ",
    },
    {
      status: "Pro",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='2 0 24 24'><rect x='0' y='0' width='24' height='24' fill='none' stroke='none' /><path d='M14.17 1L7 8.18V21h12.31L23 12.4V8h-8.31l1.12-5.38zM1 9h4v12H1z' fill='currentColor'/></svg>",
      // value: "^(\\s*)[-*] \\[[P]\\] ",
      value: "- [P] ",
    },
    {
      status: "Con",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='2 0 24 24'><path d='M1 11.6V16h8.31l-1.12 5.38L9.83 23L17 15.82V3H4.69zM19 3h4v12h-4z' fill='currentColor'/></svg>",
      // value: "^(\\s*)[-*] \\[[C]\\] ",
      value: "- [C] ",
    }
  ],
  taskChangerOrder: [],
};


DEFAULT_SETTINGS.taskChangerOrder = Object.keys(DEFAULT_SETTINGS.Tasks);

export default DEFAULT_SETTINGS;

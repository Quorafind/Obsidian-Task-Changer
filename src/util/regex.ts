import { isString } from "./string";

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

export const REGEX_ANY = "^(\\s*)";
export const REGEX_TODO = "^(\\s*)[-*] \\[[ xX]\\] ";
export const REGEX_UNCHECKED = "^(\\s*)[-*] \\[[ ]\\] ";
export const REGEX_REGULAR = "^(\\s*)[-*] \\[[x]\\] ";
export const REGEX_CHECKED = "^(\\s*)[-*] \\[[X]\\] ";
export const REGEX_DROPPED = "^(\\s*)[-*] \\[-\\] ";
export const REGEX_FORWARD = "^(\\s*)[-*] \\[>\\] ";
export const REGEX_DEFER = "^(\\s*)[-*] \\[[D]\\] ";
export const REGEX_QUESTION = "^(\\s*)[-*] \\[\?\\] ";
export const REGEX_HALFDONE = "^(\\s*)[-*] \\[\/\\] ";
export const REGEX_ADD = "^(\\s*)[-*] \\[\+\\] ";
export const REGEX_RESEARCH = "^(\\s*)[-*] \\[[R]\\] ";
export const REGEX_IMPORTANT = "^(\\s*)[-*] \\[\!\\] ";
export const REGEX_IDEA = "^(\\s*)[-*] \\[[i]\\] ";
export const REGEX_BRAINSTORM = "^(\\s*)[-*] \\[[B]\\] ";
export const REGEX_PRO = "^(\\s*)[-*] \\[[P]\\] ";
export const REGEX_CON = "^(\\s*)[-*] \\[[C]\\] ";
export const REGEX_UL = "^(\\s*)([-*]) ";
export const REGEX_OL = "^(\\s*)\\d+\\. ";

export const PREFIXES = [
  REGEX_UNCHECKED,
  REGEX_REGULAR,
  REGEX_CHECKED,
  REGEX_DROPPED,
  REGEX_FORWARD,
  REGEX_DEFER,
  REGEX_QUESTION,
  REGEX_HALFDONE,
  REGEX_ADD,
  REGEX_RESEARCH,
  REGEX_IMPORTANT,
  REGEX_IDEA,
  REGEX_BRAINSTORM,
  REGEX_PRO,
  REGEX_CON,
  REGEX_TODO,
  REGEX_UL,
  REGEX_OL,
];

export const buildRegex = (
  inputs: string | string[],
  flags: string = "gm"
): RegExp => {
  if (isString(inputs)) {
    inputs = [inputs];
  }
  return new RegExp(inputs.join("|"), flags);
};

export const matches = (text: string, search: RegExp | string): boolean => {
  if (isString(search)) {
    search = buildRegex(search);
  }
  return text.search(search) !== -1;
};

export const getIndent = (text: string): string => {
  const [, indent] = text.match(REGEX_ANY) || [];
  return indent || "";
};

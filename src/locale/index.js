import english from "./en";
import danish from "./da";
import swedish from "./sv";
import german from "./de";
import norwegian from "./no";
import i18n from "i18n-js";

i18n.translations = {
  en: english,
  da: danish,
  no: norwegian,
  sv: swedish,
  de: german,
};

export const translator = i18n;

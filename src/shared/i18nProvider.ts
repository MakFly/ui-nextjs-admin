import polyglotI18nProvider from "ra-i18n-polyglot";
import frenchMessages from "ra-language-french";

export const i18nProvider = polyglotI18nProvider(() => frenchMessages, "fr");

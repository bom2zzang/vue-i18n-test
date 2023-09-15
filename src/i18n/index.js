import ko from "../../locales-test/ko/translation.json"
import en from "../../locales-test/en/translation.json"
import { createI18n } from "vue-i18n";

const i18n = createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    messages: {
        ko,
        en
    }
})

export default i18n;

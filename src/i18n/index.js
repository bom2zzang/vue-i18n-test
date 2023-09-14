import ko from "@/locales/ko.json";
import en from "@/locales/en.json";


import { createI18n } from "vue-i18n";


// async function run(){
//     await doc.useServiceAccountAuth(creds);
//     // await doc.useServiceAccountAuth(creds);
//     await doc.loadInfo();
//     const sheet1 = doc.sheetsByIndex[0]; // WorkSheet 선택
//     const result = await sheet1.getRows();
// console.log(result)
// }
//
// run();

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

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { messages } from 'vue-i18n'
import messages from './i18n'
import { createI18n } from 'vue-i18n'


import App from './App.vue'
import router from './router'


const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'ko', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
})
const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')


/**

 import { messages } from 'vue-i18n'
 import { createI18n } from 'vue-i18n'

 const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'ko', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
})

 app.use(i18n)


// vite4 이상
//  npm i --save-dev @intlify/unplugin-vue-i18n


 * */

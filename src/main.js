import 'vuetify/styles'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const vuetify = createVuetify({
    icons: {
        iconfont: 'mdi',
    },
    components,
    directives,
})
app.use(createPinia())
app.use(vuetify)
app.use(VueAxios, axios)
app.use(router)

app.mount('#app')

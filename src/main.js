// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import { PiniaVuePlugin, createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives,
})

const pinia = createPinia()

createApp(App)
	.use(pinia)
	.use(PiniaVuePlugin)
	.use(router)
	.use(vuetify)
	.mount('#app')
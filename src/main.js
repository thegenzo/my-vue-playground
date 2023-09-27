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

// Toast notification
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css';

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
	.use(ToastPlugin, {
		position: 'top-right'
	})
	.mount('#app')
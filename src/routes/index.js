import { createRouter, createWebHistory } from 'vue-router'
import ButtonCounter from '../components/ButtonCounter.vue'
import MessageIndex from '../pages/Message/MessageIndex.vue'
import MessageCreate from '../pages/Message/MessageCreate.vue'
import MessageDetail from '../pages/Message/MessageDetail.vue'
import Watchers from '../components/Watchers.vue'
import BlogPost from '../pages/Blog/BlogPost.vue'
import BlogCreate from '../pages/Blog/BlogCreate.vue'

const routes = [
	{ path: '/', name: 'ButtonCounter', component: () => ButtonCounter },
	{ path: '/message', name: 'MessageIndex', component: () => MessageIndex },
	{ path: '/message/create', name: 'MessageCreate', component: () => MessageCreate },
	{ path: '/message/:id', name: 'MessageDetail', component: () => MessageDetail },
	{ path: '/watchers', name: 'Watchers', component: () => Watchers },
	{ path: '/blog', name: 'BlogPost', component: () => BlogPost },
	{ path: '/blog/create', name: 'BlogCreate', component: () => BlogCreate },
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
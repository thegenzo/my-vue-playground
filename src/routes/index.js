import { createRouter, createWebHistory } from 'vue-router'
import ButtonCounter from '../components/ButtonCounter.vue'
import MessageIndex from '../pages/Message/MessageIndex.vue'
import MessageCreate from '../pages/Message/MessageCreate.vue'
import MessageDetail from '../pages/Message/MessageDetail.vue'
import Watchers from '../components/Watchers.vue'
import BlogPost from '../pages/Blog/BlogPost.vue'
import BlogCreate from '../pages/Blog/BlogCreate.vue'
import Login from '../pages/Auth/Login.vue'

const routes = [
	{ path: '/login', name: 'Login', component: () => Login },
	{ path: '/', name: 'ButtonCounter', component: () => ButtonCounter, meta: { requiresAuth: true } },
	{ path: '/message', name: 'MessageIndex', component: () => MessageIndex, meta: { requiresAuth: true } },
	{ path: '/message/create', name: 'MessageCreate', component: () => MessageCreate, meta: { requiresAuth: true } },
	{ path: '/message/:id', name: 'MessageDetail', component: () => MessageDetail, meta: { requiresAuth: true } },
	{ path: '/watchers', name: 'Watchers', component: () => Watchers },
	{ path: '/blog', name: 'BlogPost', component: () => BlogPost },
	{ path: '/blog/create', name: 'BlogCreate', component: () => BlogCreate },
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach((to, from, next) => {
	const token = localStorage.getItem('jwtToken')
	if(to.meta.requiresAuth && !token) {
		next('/login')
	} else {
		next()
	}
})

export default router
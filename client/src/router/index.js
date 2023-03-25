import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from './middlewares/loadLayot.middleware'

const routes = [
	{
		path: '/',
		name: 'login',
		component: () => import('@/views/LoginView.vue')
	},

	{
		path: '/register',
		name: 'register',
		component: () => import('@/views/RegisterView.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach(loadLayoutMiddleware)

export default router

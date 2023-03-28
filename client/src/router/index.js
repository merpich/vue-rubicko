import { createRouter, createWebHistory } from 'vue-router'
import { checkAuthMiddleware } from './middlewares/checkAuth.middleware'
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
	},

	{
		path: '/:id',
		name: 'profile',
		component: () => import('@/views/ProfileView.vue'),
		meta: {
			requiredAuth: true
		}
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach(checkAuthMiddleware)
router.beforeEach(loadLayoutMiddleware)

export default router

import { createRouter, createWebHistory } from 'vue-router'
import { checkAuthMiddleware } from './middlewares/checkAuth.middleware'
import { loadLayoutMiddleware } from './middlewares/loadLayot.middleware'

const routes = [
	{
		path: '/',
		name: 'login',
		component: () => import('../views/LoginView.vue')
	},

	{
		path: '/register',
		name: 'register',
		component: () => import('../views/RegisterView.vue')
	},

	{
		path: '/:username',
		name: 'profile',
		component: () => import('../views/ProfileView.vue'),
		meta: {
			requiredAuth: true,
			layout: 'AppLayoutDefault'
		}
	},

	{
		path: '/projects',
		name: 'projects',
		component: () => import('../views/ProjectsView.vue'),
		meta: {
			requiredAuth: true,
			layout: 'AppLayoutDefault'
		}
	},

	{
		path: '/editor/:id',
		name: 'editor',
		component: () => import('../views/CodeView.vue'),
		meta: {
			requiredAuth: true,
			layout: 'AppLayoutCode'
		}
	},

	{
		path: '/posts',
		name: 'posts',
		component: () => import('../views/PostsView.vue'),
		meta: {
			requiredAuth: true,
			layout: 'AppLayoutDefault'
		}
	},

	{
		path: '/news',
		name: 'news',
		component: () => import('../views/NewsView.vue'),
		meta: {
			requiredAuth: true,
			layout: 'AppLayoutDefault'
		}
	},

	{
		path: '/settings',
		name: 'settings',
		component: () => import('../views/SettingsView.vue'),
		meta: {
			requiredAuth: true,
			layout: 'AppLayoutDefault'
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

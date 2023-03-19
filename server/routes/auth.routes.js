import { Router } from 'express'

import * as AuthController from '../controllers/auth.controller.js'

const router = Router()

router.route('/login')
	.post(
		AuthController.loginUser
	)

router.route('/register')
	.post(
		AuthController.registerUser
	)

export default router

import { Router } from 'express'

import * as UserController from '../controllers/user.controller.js'

import { checkAuth, uploadFile } from '../middlewares/app.middleware.js'

const router = Router()
const uploadImage = uploadFile('uploads/avatars', 'image')

router.route('/')
	.get(
		checkAuth,
		UserController.getMe
	)
	.patch(
		checkAuth,
		uploadImage,
		UserController.updateUser
	)

router.route('/:username')
	.get(
		UserController.getUser
	)

export default router

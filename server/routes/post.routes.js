import { Router } from 'express'

import * as PostController from '../controllers/post.controller.js'

import { checkAuth, uploadFile } from '../middlewares/app.middleware.js'

const router = Router()
const uploadImage = uploadFile('uploads/posts', 'image')

router.route('/')
	.get(
		PostController.getPosts
	)
	.post(
		checkAuth,
		uploadImage,
		PostController.createPost
	)

router.route('/:id')
	.get(
		PostController.getPost
	)
	.patch(
		checkAuth,
		uploadImage,
		PostController.updatePost
	)
	.delete(
		checkAuth,
		PostController.deletePost
	)

export default router

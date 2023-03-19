import PostModel from '../models/post.model.js'
import CategoryModel from '../models/category.model.js'

export const getPosts = async (req, res) => {
	try {
		const category = await CategoryModel.find({ title: req.query.category })

		if (!category || category.length === 0) {
			return res.status(404).json({
				message: 'Статьи не найдены'
			})
		}

		const posts = await PostModel
			.find({ categoryId: category })
			.populate('userId')
			.populate('categoryId')
			.exec()

		if (posts.length === 0) {
			return res.status(404).json({
				message: 'Статьи не найдены'
			})
		}

		const postsFiltered = posts.map(post => {
			const data = JSON.parse(JSON.stringify(post))

			delete data.userId.passwordHash
			delete data.userId.email

			return data
		})

		res.status(200).json(postsFiltered)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось получить статьи'
		})
	}
}

export const getPost = async (req, res) => {
	try {
		const post = await PostModel
			.findOne({ _id: req.params.id })
			.populate('userId')
			.populate('categoryId')
			.exec()

		if (!post) {
			return res.status(404).json({
				message: 'Статья не найдена'
			})
		}

		const postFiltered = JSON.parse(JSON.stringify(post))

		delete postFiltered.userId.passwordHash
		delete postFiltered.userId.email

		res.status(200).json(postFiltered)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось получить статью'
		})
	}
}

export const createPost = async (req, res) => {
	try {
		const document = new PostModel({
			userId: req.userId,
			...req.body
		})

		if (req.file) {
			document.imageUrl = `/uploads/avatars/${req.file.filename}`
		}

		await document.save()

		res.status(201).json({
			success: true
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось создать статью'
		})
	}
}

export const updatePost = async (req, res) => {
	try {
		const post = await PostModel.findOne({ _id: req.params.id })

		if (!post) {
			return res.status(404).json({
				message: 'Статья не найдена'
			})
		}

		if (req.body.title) {
			post.title = req.body.title
		}

		if (req.body.text) {
			post.text = req.body.text
		}

		if (req.file) {
			post.imageUrl = `/uploads/avatars/${req.file.filename}`
		}

		post.save()

		res.status(200).json({
			success: true
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось обновить статью'
		})
	}
}

export const deletePost = async (req, res) => {
	try {
		const post = await PostModel.findOne({
			_id: req.params.id
		})

		if (!post) {
			return res.status(404).json({
				message: 'Статья не найдена'
			})
		}

		post.deleteOne()

		res.status(200).json({
			success: true
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось удалить проект'
		})
	}
}

export const likePost = async (req, res) => {
	try {
		const post = await PostModel.findOne({ _id: req.params.id })

		if (post.liked.length > 0) {
			post.liked.forEach(userId => {
				if (userId === req.userId) {
					post.liked = post.liked.filter(userId => userId !== req.userId)
				} else {
					post.liked.push(req.userId)
				}
			})
		} else {
			post.liked.push(req.userId)
		}

		post.save()

		res.status(200).json({
			success: true
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось оценить статью'
		})
	}
}

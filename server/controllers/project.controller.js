import ProjectModel from '../models/project.model.js'

export const getProjects = async (req, res) => {
	try {
		const projects = await ProjectModel.find({ userId: req.params.userid })

		res.status(200).json(projects)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось получить проекты'
		})
	}
}

export const getProject = async (req, res) => {
	try {
		const project = await ProjectModel
			.findOne({ _id: req.params.id })
			.populate('userId').exec()

		if (!project) {
			return res.status(404).json({
				message: 'Проект не найден'
			})
		}

		res.status(200).json(project)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось получить проект'
		})
	}
}

export const createProject = async (req, res) => {
	try {
		const document = new ProjectModel({
			userId: req.userId,
			...req.body
		})

		const project = await document.save()

		res.status(201).json(project)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось создать проект'
		})
	}
}

export const updateProject = async (req, res) => {
	try {
		await ProjectModel.updateOne({
			_id: req.params.id
		}, {
			...req.body
		})

		res.status(200).json({
			success: true
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось обновить проект'
		})
	}
}

export const deleteProject = async (req, res) => {
	try {
		await ProjectModel.deleteOne({ _id: req.params.id })

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

export const likeProject = async (req, res) => {
	try {
		const project = await ProjectModel.findOne({ _id: req.params.id })

		if (project.liked.length > 0) {
			project.liked.forEach(userId => {
				if (userId === req.userId) {
					project.liked = project.liked.filter(userId => userId !== req.userId)
				} else {
					project.liked.push(req.userId)
				}
			})
		} else {
			project.liked.push(req.userId)
		}

		project.save()

		res.status(200).json({
			success: true
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось оценить проект'
		})
	}
}

import UserModel from '../models/user.model.js'

export const getMe = async (req, res) => {
	try {
		const user = await UserModel.findOne({ _id: req.userId })

		if (!user) {
			return res.status(404).json({
				message: 'Пользователь не найден'
			})
		}

		const { passwordHash, ...userData } = user._doc

		res.status(200).json(userData)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось получить данные'
		})
	}
}

export const getUser = async (req, res) => {
	try {
		const user = await UserModel.findOne({ userName: req.params.username })

		if (!user) {
			return res.status(404).json({
				message: 'Пользователь не найден'
			})
		}

		const { passwordHash, ...userData } = user._doc

		res.status(200).json(userData)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось получить данные'
		})
	}
}

export const updateUser = async (req, res) => {
	try {
		if (req.body.userName) {
			req.body.userName = req.body.userName.toLowerCase()
		}

		await UserModel.updateOne({
			_id: req.userId
		}, {
			...req.body,
			avatarUrl: req.file && `/uploads/avatars/${req.file.filename}`
		})

		res.status(200).json({
			success: true
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось обновить данные'
		})
	}
}

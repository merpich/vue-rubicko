import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import UserModel from '../models/user.model.js'

export const loginUser = async (req, res) => {
	try {
		const user = await UserModel.findOne({ email: req.body.email })

		if (!user) {
			return res.status(403).json({
				message: 'Неверная электронная почта или пароль'
			})
		}

		const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)

		if (!isValidPass) {
			return res.status(403).json({
				message: 'Неверная электронная почта или пароль'
			})
		}

		const token = jwt.sign({
			_id: user._id
		}, process.env.JWT_SECRET_KEY, {
			expiresIn: '14d'
		})

		const { passwordHash, ...userData } = user._doc

		res.json({
			...userData,
			token
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось авторизоваться'
		})
	}
}

export const registerUser = async (req, res) => {
	try {
		const salt = await bcrypt.genSalt()
		const password = await bcrypt.hash(req.body.password, salt)

		const document = new UserModel({
			fullName: req.body.fullName ? req.body.fullName : null,
			userName: req.body.userName.toLowerCase(),
			userBio: req.body.userBio ? req.body.userBio : null,
			avatarUrl: null,
			email: req.body.email,
			passwordHash: password
		})

		const user = await document.save()

		const token = jwt.sign({
			_id: user._id
		}, process.env.JWT_SECRET_KEY, {
			expiresIn: '14d'
		})

		const { passwordHash, ...userData } = user._doc

		res.json({
			...userData,
			token
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Не удалось зарегестрировать пользователя'
		})
	}
}

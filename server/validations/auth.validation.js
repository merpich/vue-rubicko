import { body } from 'express-validator'

import UserModel from '../models/user.model.js'

export const loginValidation = [
	body('email', 'Неверный формат почты').isEmail(),
]

export const registerValidation = [
	body('userName').custom(async value => {
		const user = await UserModel.findOne({ userName: value })
		if (user) return Promise.reject('Никнейм уже занят')
	}),

	body('fullName', 'Не более 64 символов')
		.optional().isLength({ max: 64 }),

	body('userBio', 'Не более 256 символов')
		.optional().isLength({ max: 256 }),

	body('email', 'Неверный формат почты').isEmail().custom(async value => {
		const user = await UserModel.findOne({ email: value })
		if (user) return Promise.reject('Электронная почта уже занята')
	}),

	body('password', 'Пароль должен быть минимум из 8 символов')
		.isLength({ min: 8 })
]

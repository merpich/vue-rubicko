import { body } from 'express-validator'

export const updateValidation = [
	body('fullName', 'Не больше 64 символов')
		.optional().isLength({ max: 64 }),

	body('userBio', 'Не больше 256 символов')
		.optional().isLength({ max: 256 })
]

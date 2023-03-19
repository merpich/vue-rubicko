import { body } from 'express-validator'

export const updateValidation = [
	body('fullName', 'Не более 64 символов')
		.optional().isLength({ max: 64 }),

	body('userBio', 'Не более 256 символов')
		.optional().isLength({ max: 256 })
]

import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from '@/axios'

export const useUserStore = defineStore('user', () => {
	const userData = ref({})

	const login = async (data) => {
		try {
			const response = await axios.post('/login', data)
			const { token, ...user } = response.data

			userData.value = { ...user }
			localStorage.setItem('token', token)
		} catch (error) {
			if (error.response) {
				return error.response.data
			}
			return [{ msg: 'Ошибка сети' }]
		}
	}

	const register = async (data) => {
		try {
			const response = await axios.post('/register', data)
			const { token, ...user } = response.data

			userData.value = { ...user }
			localStorage.setItem('token', token)
		} catch (error) {
			if (error.response) {
				return error.response.data
			}
			return [{ msg: 'Ошибка сети' }]
		}
	}

	return { userData, login, register }
})

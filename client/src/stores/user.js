import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from '../axios'

export const useUserStore = defineStore('user', () => {
	const userData = ref({})
	const isAuth = ref(false)

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

	 const getMe = async () => {
		try {
			const response = await axios.get('/user', {
				headers: {
					Authorization: localStorage.getItem('token')
				}
			})

			userData.value = { ...response.data }
		} catch (error) {

		}
	}

	 const get = async (userName) => {
		try {
			const response = await axios.get('/user/' + userName)
			const user = response.data

			isAuth.value = user._id === userData.value._id

			return response.data
		} catch (error) {

		}
	}

	const update = async (data) => {
		try {
			const response = await axios.patch('/user', data, {
				headers: {
					Authorization: localStorage.getItem('token')
				}
			})

			Object.assign(userData.value, response.data.data)
		} catch (error) {

		}
	}

	return {
		userData,
		isAuth,
		login,
		register,
		getMe,
		get,
		update
	}
})

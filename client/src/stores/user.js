import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from '../axios'

export const useUserStore = defineStore('user', () => {
	const userData = ref({})
	const isAuth = ref(false)
	const isLoading = ref(false)

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

	 const getMe = async (data) => {
		try {
			const response = await axios.get('/user', {
				headers: {
					Authorization: localStorage.getItem('token')
				}
			})

			return response.data
		} catch (error) {

		}
	 }

	 const get = async (user) => {
		try {
			isLoading.value = true
			const response = await axios.get('/user/' + user)
			const userMe = await getMe()

			userData.value = { ...response.data }
			isAuth.value = userMe._id === userData.value._id && true
			isLoading.value = false
		} catch (error) {
			isLoading.value = false
		}
	}

	return {
		userData,
		isLoading,
		login,
		register,
		getMe,
		get
	 }
})

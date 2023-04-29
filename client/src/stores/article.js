import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from '../axios'

export const useArticleStore = defineStore('post', () => {
	const articles = ref([])
	const articleData = ref({})

	const get = async (userId) => {
		try {
			const response = await axios.get('/post?user=' + userId)
			posts.value = [ ...response.data ]
		} catch (error) {

		}
	}

	const craeate = async (formData) => {
		const response = await axios.post('/post', formData, {
			headers: {
				Authorization: localStorage.getItem('token')
			}
		})

		articleData.value = response.data
	}

	return {
		articles,
		articleData,
		get,
		craeate
	}
})

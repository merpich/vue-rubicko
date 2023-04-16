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

	return {
		articles,
		articleData,
		get
	}
})

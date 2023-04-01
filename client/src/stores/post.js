import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from '../axios'

export const usePostStore = defineStore('post', () => {
	const posts = ref([])
	const postData = ref({})

	const get = async (userId) => {
		try {
			const response = await axios.get('/post?user=' + userId)
			posts.value = [ ...response.data ]
		} catch (error) {

		}
	}

	return {
		posts,
		get
	}
})

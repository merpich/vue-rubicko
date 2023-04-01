import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from '../axios'

export const useProjectStore = defineStore('project', () => {
	const projects = ref([])
	const projectData = ref({})

	const get = async (userId) => {
		try {
			const response = await axios.get('/project?user=' + userId)
			projects.value = [ ...response.data ]
		} catch (error) {

		}
	}

	return {
		projects,
		get
	}
})

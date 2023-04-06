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

	const getOne = async (projectId) => {
		try {
			const response = await axios.get('/project/' + projectId)
			projectData.value = { ...response.data }
		} catch (error) {

		}
	}

	const update = async () => {
		try {
			await axios.patch('/project/' + projectData.value._id, projectData.value, {
				headers: {
					Authorization: localStorage.getItem('token')
				}
			})
		} catch (error) {

		}
	}

	return {
		projects,
		projectData,
		get,
		getOne,
		update
	}
})

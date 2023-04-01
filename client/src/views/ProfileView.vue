<script setup>
	import { ref, watch, onBeforeMount } from 'vue'
	import { useRoute } from 'vue-router'
	import { useUserStore } from '../stores/user'
	import { useProjectStore } from '../stores/project'
	import { usePostStore } from '../stores/post'
	import { BaseLoader } from '../components/base'
	import TheProfile from '../components/profile/TheProfile.vue'
	import TheProfileProjects from '../components/profile/TheProfileProjects.vue'
	import TheProfilePosts from '../components/profile/TheProfilePosts.vue'

	const isLoading = ref(false)
	const route = useRoute()
	const userStore = useUserStore()
	const projectStore = useProjectStore()
	const postStore = usePostStore()

	const fetchData = async () => {
		try {
			isLoading.value = true
			await userStore.get(route.params.id)
			await projectStore.get(userStore.userData._id)
			await postStore.get(userStore.userData._id)
			isLoading.value = false
		} catch (error) {
			isLoading.value = false
			console.log(error)
		}
	}

	watch(
		() => route.params.id,
		() => fetchData()
	)

	onBeforeMount(() => fetchData())
</script>

<template>
	<BaseLoader class="mx-auto my-10" v-if="isLoading" />
	<div class="grid gap-8 md:grid-cols-[4fr_8fr] md:items-start" v-if="!isLoading">
		<TheProfile />
		<div class="grid gap-8">
			<TheProfileProjects />
			<TheProfilePosts />
		</div>
	</div>
</template>

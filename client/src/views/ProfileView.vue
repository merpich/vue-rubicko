<script setup>
	import { watch, onBeforeMount } from 'vue'
	import { useRoute } from 'vue-router'
	import { useUserStore } from '../stores/user'
	import { BaseLoader } from '../components/base'
	import TheProfile from '../components/profile/TheProfile.vue'

	const route = useRoute()
	const userStore = useUserStore()

	const fetchData = async () => {
		try {
			await userStore.get(route.params.id)
		} catch (error) {
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
	<BaseLoader class="mx-auto my-10" v-if="userStore.isLoading" />
	<div class="grid gap-8 md:grid-cols-[4fr_8fr] md:items-center" v-if="!userStore.isLoading">
		<TheProfile />
	</div>
</template>

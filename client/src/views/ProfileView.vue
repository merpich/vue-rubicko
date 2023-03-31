<script setup>
	import { ref, watch, onBeforeMount } from 'vue'
	import { useRoute } from 'vue-router'
	import { useUserStore } from '@/stores/user'
	import TheProfile from '@/components/profile/TheProfile.vue'

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
	<div class="grid gap-10 md:grid-cols-[4fr_8fr] md:items-center">
		<TheProfile />
	</div>
</template>

<script setup>
	import { onBeforeMount } from 'vue';
	import { useRoute, useRouter } from 'vue-router'
	import TheNewsNav from '../components/news/TheNewsNav.vue'

	const router = useRouter()
	const route = useRoute()

	onBeforeMount(() => {
		if (!route.query.cat) {
			router.push('/news?cat=articles')
		}
	})
</script>

<template>
	<div class="grid gap-8">
		<div class="grid gap-4">
			<h1 class="text-2xl text-slate-900 font-bold">Новости</h1>
			<TheNewsNav />
		</div>
	</div>
</template>

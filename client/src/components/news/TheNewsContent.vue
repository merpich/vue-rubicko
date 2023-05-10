<script setup>
	import { useRoute } from 'vue-router'
	import TheNewsContentArticles from './TheNewsContentArticles.vue'
	import TheNewsContentProjects from './TheNewsContentProjects.vue'

	const route = useRoute()
</script>

<template>
	<TheNewsContentArticles v-if="route.query.cat === 'articles'" />
	<TheNewsContentProjects v-if="route.query.cat === 'projects'" />
</template>

<script setup>
	import { onBeforeMount, ref } from 'vue';
	import { useNewsStore } from '../../stores/news'
	import { BaseLoader } from '../base'
	import ArticleItem from '../article/ArticleItem.vue'

	const isLoading = ref(false)

	const newsStore = useNewsStore()

	const getArticles = async () => {
		try {
			isLoading.value = true
			await newsStore.getArticles()
			isLoading.value = false
		} catch (error) {
			isLoading.value = false
		}
	}

	onBeforeMount(() => getArticles())
</script>

<template>
	<BaseLoader class="mx-auto" v-if="isLoading" />
	<div class="grid max-w-xl gap-4" v-if="!isLoading">
		<ArticleItem
			v-for="article in newsStore.articles"
			:key="article._id"
			:articleData="article"
		/>
	</div>
</template>

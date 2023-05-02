<script setup>
	import { ref, watch, onBeforeMount, computed } from 'vue'
	import { useRoute } from 'vue-router'

	import { useUserStore } from '../stores/user'
	import { useArticleStore } from '../stores/article'

	import { BaseLink, BaseLoader } from '../components/base'
	import TheArticleImage from '../components/article/TheArticleImage.vue'
	import TheArticleContent from '../components/article/TheArticleContent.vue'

	const isLoading = ref(false)
	const isAuth = ref(false)

	const userStore = useUserStore()
	const articleStore = useArticleStore()
	const route = useRoute()

	const url = computed(() => `/article/editor/${articleStore.articleData._id}`)

	const fetchData = async () => {
		try {
			isLoading.value = true

			await userStore.getMe()
			await articleStore.getOne(route.params.id)

			isAuth.value = userStore.userData._id === articleStore.articleData.userId._id
			isLoading.value = false
		} catch (error) {
			isLoading.value = false
		}
	}

	watch(
		() => route.params.id,
		() => fetchData()
	)

	onBeforeMount(() => fetchData())
</script>

<template>
	<div class="grid max-w-2xl gap-4">
		<BaseLink :url="url" v-if="isAuth">
			Редактировать
		</BaseLink>
		<BaseLoader class="mx-auto my-10" v-if="isLoading" />
		<section class="grid gap-8" v-if="!isLoading">
			<TheArticleImage :articleData="articleStore.articleData" />
			<TheArticleContent />
		</section>
	</div>
</template>

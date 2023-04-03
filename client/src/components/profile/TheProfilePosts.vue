<script setup>
	import { computed } from 'vue'
	import { useUserStore } from '../../stores/user'
	import { usePostStore } from '../../stores/post'

	import { BaseButton } from '../base'
	import ArticleItem from '../article/ArticleItem.vue'

	const userStore = useUserStore()
	const postStore = usePostStore()

	const posts = computed(() => postStore.posts.filter((item, index) => index < 4))
</script>

<template>
	<section class="grid gap-6">
		<header class="flex items-center justify-between">
			<h2 class="text-xl sm:text-2xl text-slate-900 font-semibold">Статьи</h2>
			<BaseButton v-if="userStore.isAuth">
				Создать статью
			</BaseButton>
		</header>
		<div class="grid gap-4">
			<ArticleItem
				v-for="post in posts"
				:key="post._id"
				:data="{ ...post }"
			/>
		</div>
	</section>
</template>

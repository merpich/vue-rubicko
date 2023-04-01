<script setup>
	import ArticleItem from '../article/ArticleItem.vue'
	import { BaseButton } from '../base'
</script>

<template>
	<section class="grid gap-6">
		<header class="flex items-center justify-between">
			<h2 class="text-xl sm:text-2xl text-slate-900 font-semibold">Статьи</h2>
			<BaseButton>
				Создать статью
			</BaseButton>
		</header>
		<div class="grid gap-4">
			<ArticleItem />
			<ArticleItem />
			<ArticleItem />
			<ArticleItem />
		</div>
	</section>
</template>

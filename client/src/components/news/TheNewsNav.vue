<script setup>
	import NewsNavItem from './NewsNavItem.vue'
</script>

<template>
	<div class="flex gap-2">
		<NewsNavItem label="Статьи" url="/news?cat=articles" />
		<NewsNavItem label="Проекты" url="/news?cat=projects" />
	</div>
</template>

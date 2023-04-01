<script setup>
	import ProjectItem from '../project/ProjectItem.vue'
	import { BaseButton } from '../base'
</script>

<template>
	<section class="grid gap-6">
		<header class="flex items-center justify-between">
			<h2 class="text-2xl text-slate-900 font-semibold">Проекты</h2>
			<BaseButton>
				Создать проект
			</BaseButton>
		</header>
		<div class="grid sm:grid-cols-2 gap-4">
			<ProjectItem />
			<ProjectItem />
			<ProjectItem />
			<ProjectItem />
		</div>
	</section>
</template>

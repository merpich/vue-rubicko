<script setup>
	import { computed } from 'vue'
	import { useProjectStore } from '../../stores/project'
	import ProjectItem from '../project/ProjectItem.vue'
	import { BaseButton } from '../base'

	const projectStore = useProjectStore()

	const projects = computed(() => projectStore.projects)
	const projectsFiltered = computed(() => projects.value.filter((item, index) => index < 4))
</script>

<template>
	<section class="grid gap-6">
		<header class="flex items-center justify-between">
			<h2 class="text-xl sm:text-2xl text-slate-900 font-semibold">Проекты</h2>
			<BaseButton>
				Создать проект
			</BaseButton>
		</header>
		<div class="grid sm:grid-cols-2 gap-4">
			<ProjectItem
				v-for="project in projectsFiltered"
				:key="project._id"
				:data="{ ...project }"
			/>
		</div>
	</section>
</template>

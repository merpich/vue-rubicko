<script setup>
	import { ref, computed } from 'vue'
	import { useUserStore } from '../../stores/user'
	import { useProjectStore } from '../../stores/project'

	import { BaseButton } from '../base'
	import ProjectItem from '../project/ProjectItem.vue'
	import ProjectModal from '../project/ProjectModal.vue'

	const isOpen = ref(false)

	const userStore = useUserStore()
	const projectStore = useProjectStore()

	const projects = computed(() => projectStore.projects.filter((item, index) => index < 4))

	const openModal = () => isOpen.value = true
	const closeModal = () => isOpen.value = false
</script>

<template>
	<section class="grid gap-6">
		<header class="flex items-center justify-between">
			<h2 class="text-xl sm:text-2xl text-slate-900 font-semibold">Проекты</h2>
			<BaseButton @click="openModal" v-if="userStore.isAuth">
				Создать проект
			</BaseButton>
			<ProjectModal @close="closeModal" v-if="isOpen" />
		</header>
		<div class="grid sm:grid-cols-2 gap-4">
			<ProjectItem
				v-for="project in projects"
				:key="project._id"
				:data="{ ...project }"
			/>
		</div>
	</section>
</template>

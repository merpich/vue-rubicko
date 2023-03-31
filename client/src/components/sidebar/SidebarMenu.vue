<script setup>
	import { ref, computed, onBeforeMount } from 'vue'
	import { useUserStore } from '@/stores/user'
	import SidebarMenuItem from '@/components/sidebar/SidebarMenuItem.vue'

	const userMe = ref({})
	const userStore = useUserStore()

	const profileUrl = computed(() => '/' + userMe.value.userName)

	onBeforeMount(async () => userMe.value = await userStore.getMe())
</script>

<template>
	<ul	class="-ml-4">
		<SidebarMenuItem :url="profileUrl" label="Мой профиль" />
		<SidebarMenuItem url="/projects" label="Проекты" />
		<SidebarMenuItem url="/posts" label="Статьи" />
		<SidebarMenuItem url="/news" label="Новости" />
	</ul>
</template>

<script setup>
	import { computed } from '@vue/reactivity'
	import { useUserStore } from '@/stores/user'
	import TheProfileAvatarImage from '@/components/profile/TheProfileAvatarImage.vue';

	const userStore = useUserStore()

	const src = computed(() => {
		return userStore.userData.avatarUrl ? import.meta.env.VITE_APP_BACKEND_URL + userStore.userData.avatarUrl : false
	})
</script>

<template>
	<div class="relative w-full pt-[calc(100%-4px)] overflow-hidden border-2 border-solid border-slate-500 rounded-full">
		<div class="flex items-center justify-center absolute top-0 bottom-0 right-0 left-0">
			<TheProfileAvatarImage :src="src" />
		</div>
	</div>
</template>

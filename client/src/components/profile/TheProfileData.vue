<script setup>
	import { computed } from 'vue'
	import { useUserStore } from '@/stores/user'

	const userStore = useUserStore()

	const userName = computed(() => userStore.userData.userName)
	const fullName = computed(() => userStore.userData.fullName)
	const userBio = computed(() => userStore.userData.userBio)
</script>

<template>
	<div class="grid sm:gap-1">
		<h1 class="text-2xl sm:text-3xl text-slate-900 font-bold">{{ userName }}</h1>
		<p class="text-lg sm:text-xl text-slate-900 font-medium" v-if="fullName">{{ fullName }}</p>
		<p class="text-sm sm:text-base text-slate-900" v-if="userBio">{{ userBio }}</p>
	</div>
</template>

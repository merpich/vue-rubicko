<script setup>
	import { ref } from 'vue'
	import { useUserStore } from '@/stores/user'
	import TheProfileAvatar from '@/components/profile/TheProfileAvatar.vue';

	const userSore = useUserStore()
</script>

<template>
	<div class="grid gap-6">
		<TheProfileAvatar />
	</div>
</template>

<script setup>
	import { RouterView } from 'vue-router'
	import AppLayout from '@/layouts/AppLayout.vue'
</script>

<template>
	<AppLayout>
		<RouterView />
	</AppLayout>
</template>

<style lang="scss">
	@import '@/main.scss';
</style>

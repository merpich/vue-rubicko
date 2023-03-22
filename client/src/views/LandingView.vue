<script setup>
	import TheLogin from '@/components/landing/TheLogin.vue'
	import TheRegister from '@/components/landing/TheRegister.vue'
</script>

<template>
	<main class="content">
		<TheLogin />
		<TheRegister />
	</main>
</template>

<style lang="scss" scoped>
	.content {
		height: 100%;
	}
</style>

<script setup>
	import TheLogin from '@/components/landing/TheLogin.vue'
	import TheRegister from '@/components/landing/TheRegister.vue'
</script>

<template>
	<main class="h-full">
		<TheLogin id="login" class="pt-8 pb-32 md:py-20 lg:py-48" />
		<TheRegister id="register" class="pb-8 pt-32 md:py-20 lg:py-48" />
	</main>
</template>

<script setup>
	import TheIntro from '@/components/auth/TheIntro.vue'
	import TheLink from '@/components/auth/TheLink.vue'
	import TheLogin from '@/components/auth/TheLogin.vue'
</script>

<template>
	<main class="app-page">
		<div class="app-container container">
			<div class="grid gap-8">
				<TheIntro />
				<TheLink />
			</div>
			<TheLogin />
		</div>
	</main>
</template>

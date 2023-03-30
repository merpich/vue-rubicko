<script setup>
	import TheIntro from '@/components/intro/TheIntro.vue'
	import TheIntroWelcome from '@/components/intro/TheIntroWelcome.vue'
	import TheIntroLogin from '@/components/intro/TheIntroLogin.vue'
</script>

<template>
	<TheIntro>
		<section :class="$style['app-container']">
			<TheIntroWelcome />
			<TheIntroLogin />
		</section>
	</TheIntro>
</template>

<style module>
	.app-container {
		@apply container grid md:grid-cols-2 items-start gap-8 md:gap-16;
	}
</style>

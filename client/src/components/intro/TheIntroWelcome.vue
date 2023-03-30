<script setup>
	import IntroCard from '@/components/intro/base/IntroCard.vue'
</script>

<template>
	<IntroCard>
		<div :class="$style['app-logo']">
			<img :class="$style['app-icon']" width="80" height="80" src="icons/logo-light.svg" alt="Логотип Рубико">
			<h1 :class="$style['app-title']">Rubicko</h1>
		</div>
		<p :class="$style['app-text']">Место, где вы можете создавать небольшие веб-приложения</p>
	</IntroCard>
</template>

<style lang="scss" module>
	.app {
		&-logo {
			@apply flex items-center gap-4 md:gap-8;
		}
		&-title {
			@apply font-bold text-4xl lg:text-5xl text-white;
		}
		&-icon {
			@apply select-none pointer-events-none;
		}
		&-text {
			@apply text-2xl lg:text-4xl font-medium text-white;
		}
	}
</style>

<script setup>
	import TheHeader from '@/components/header/TheHeader.vue'
	import TheSidebar from '@/components/sidebar/TheSidebar.vue'
</script>

<template>
	<TheHeader />
	<div :class="$style['app-container']">
		<TheSidebar />
		<slot></slot>
	</div>
</template>

<style module>
	.app-container {
		@apply container py-20 grid items-start
			md:grid-cols-[2fr_10fr] md:gap-8;
	}
</style>

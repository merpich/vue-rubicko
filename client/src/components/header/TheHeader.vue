<script setup>
	import { BaseLogo } from '../base'
	import TheHeaderDots from './TheHeaderDots.vue'
	import TheHeaderMenu from './TheHeaderMenu.vue'
</script>

<template>
	<header class="py-2 bg-slate-800 fixed top-0 left-0 right-0 z-10">
		<div class="container flex justify-between">
			<BaseLogo />
			<div class="relative -my-2">
				<TheHeaderDots />
				<TheHeaderMenu />
			</div>
		</div>
	</header>
</template>

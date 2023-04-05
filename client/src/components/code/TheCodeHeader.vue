<script setup>
	import { BaseLogo } from '../base'
	import TheHeaderControls from '../header/TheHeaderControls.vue'
</script>

<template>
	<header class="py-2 px-3 flex justify-between bg-slate-800 relative z-10">
		<BaseLogo />
		<TheHeaderControls />
	</header>
</template>

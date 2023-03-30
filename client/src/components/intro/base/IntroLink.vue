<script setup>
	import { RouterLink } from 'vue-router'

	defineProps({
		url: {
			type: String,
			default() {
				return ''
			}
		}
	})
</script>

<template>
	<RouterLink :class="$style['app-link']" :to="url">
		<slot></slot>
	</RouterLink>
</template>

<style module>
	.app-link {
		@apply text-xl text-white hover:underline focus:underline outline-none;
	}
</style>

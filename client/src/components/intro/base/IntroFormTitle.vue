<script setup>
	defineProps({
		text: {
			type: String,
			default() {
				return ''
			}
		}
	})
</script>

<template>
	<h2 :class="$style['app-title']">
		{{ text }}
	</h2>
</template>

<style module>
	.app-title {
		@apply font-medium text-3xl text-white;
	}
</style>

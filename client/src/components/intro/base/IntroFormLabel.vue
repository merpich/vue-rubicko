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
	<label :class="$style['app-label']">
		{{ text }}
	</label>
</template>

<style module>
	.app-label {
		@apply w-full pb-2 text-xl text-white;
	}
</style>

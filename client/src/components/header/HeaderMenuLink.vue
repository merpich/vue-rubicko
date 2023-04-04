<script setup>
	import { RouterLink } from 'vue-router'

	defineProps({
		url: {
			type: String,
			default() {
				return '/'
			}
		},
		label: {
			type: String,
			default() {
				return ''
			}
		}
	})
</script>

<template>
	<li>
		<RouterLink class="block py-1 hover:underline" :to="url">
			{{ label }}
		</RouterLink>
	</li>
</template>

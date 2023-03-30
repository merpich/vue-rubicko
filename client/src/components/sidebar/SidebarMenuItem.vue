<script setup>
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
		<RouterLink class="text-slate-600 py-1 px-4 block hover:bg-slate-200 rounded-2xl" :to="url">
			{{ label }}
		</RouterLink>
	</li>
</template>

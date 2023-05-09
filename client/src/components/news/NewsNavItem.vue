<script setup>
	import { computed } from 'vue'
	import { useRoute } from 'vue-router'

	const props = defineProps({
		label: {
			type: String,
			required: true
		},

		url: {
			type: String,
			required: true
		}
	})

	const route = useRoute()

	const classes = computed(() => {
		return route.fullPath === props.url
			? 'px-4 py-1 text-sm text-white bg-green-500 shadow rounded-full'
			: 'px-4 py-1 text-sm text-slate-900 bg-white hover:bg-green-300 shadow rounded-full transition-colors'
	})
</script>

<template>
	<RouterLink :to="url" :class="classes">
		{{ label }}
	</RouterLink>
</template>

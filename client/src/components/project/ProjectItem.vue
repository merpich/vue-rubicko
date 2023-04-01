<script setup>
	import { computed } from 'vue';
	import { RouterLink } from 'vue-router'

	const props = defineProps({
		data: {
			type: Object,
			required: true
		}
	})

	const title = computed(() => props.data.title)
	const date = computed(() => props.data.createdAt.split('T')[0])
</script>

<template>
	<div class="px-6 py-4 grid gap-1 bg-white shadow rounded-2xl">
		<RouterLink class="text-blue-600 font-medium hover:underline" to="#">
			{{ title }}
		</RouterLink>
		<time datetime="2023-04-01" class="font-slate-900">
			{{ date }}
		</time>
	</div>
</template>

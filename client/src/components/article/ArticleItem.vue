<script setup>
	import { RouterLink } from 'vue-router'

	defineProps({
		data: {
			type: Object,
			required: true
		}
	})
</script>

<template>
	<div class="px-2 pb-4 grid grid-cols-[1fr_auto] gap-4 border-b-2 border-slate-200 last:border-none">
		<RouterLink class="text-blue-600 font-medium hover:underline" to="#">
			{{ data.title }}
		</RouterLink>
		<RouterLink class="text-slate-900 hover:underline" to="#">
			Редактировать
		</RouterLink>
	</div>
</template>

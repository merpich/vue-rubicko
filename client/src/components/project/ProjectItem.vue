<script setup>
	import { RouterLink } from 'vue-router'
</script>

<template>
	<div class="px-6 py-4 grid gap-1 bg-white shadow rounded-2xl">
		<RouterLink class="text-blue-600 font-medium hover:underline" to="#">
			Название
		</RouterLink>
		<date class="font-slate-900">
			20-12-2023
		</date>
	</div>
</template>

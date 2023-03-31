<script setup>
	defineProps({
		src: {
			type: [String, Boolean],
			required: true
		}
	})
</script>

<template>
	<img class="object-cover w-full h-full" alt="Аватар" v-if="src" :src="src">
</template>

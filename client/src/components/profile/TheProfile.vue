<script setup>
	import TheProfileAvatar from './TheProfileAvatar.vue';
	import TheProfileData from './TheProfileData.vue';
</script>

<template>
	<div class="grid md:grid-cols-none grid-cols-[4fr_8fr] items-start gap-6">
		<TheProfileAvatar />
		<TheProfileData />
	</div>
</template>

<script setup>
	import TheHeader from '@/components/header/TheHeader.vue'
	import TheSidebar from '@/components/sidebar/TheSidebar.vue'
</script>

<template>
	<TheHeader />
	<div class="app-container py-20">
		<TheSidebar />
		<slot></slot>
	</div>
</template>

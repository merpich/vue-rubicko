<script setup>
	import TheHeader from '@/components/header/TheHeader.vue'
	import TheSidebar from '@/components/sidebar/TheSidebar.vue'
</script>

<template>
	<TheHeader />
	<div class="container py-24">
		<TheSidebar />
		<div class="lg:pl-48">
			<slot></slot>
		</div>
	</div>
</template>

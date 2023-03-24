<script setup>
	import LandingSlide from '@/components/landing/LandingSlide.vue'
	import TheLoginWelcome from '@/components/landing/TheLoginWelcome.vue'
	import TheLoginForm from '@/components/landing/TheLoginForm.vue'
</script>

<template>
	<LandingSlide class="relative" style="background: url('images/slide-dark.webp') center / cover;">
		<div class="container grid md:grid-cols-[8fr_4fr] md:items-start gap-16">
			<TheLoginWelcome class="md:col-start-1 md:col-end-2" />
			<TheLoginForm class="md:col-start-2 md:col-end-3" />
		</div>
		<a class="absolute bottom-0 left-0 right-0 py-8 lg:py-32 md:py-24 outline-none" href="#register">
			<img class="mx-auto" src="icons/action-light.svg" alt="">
		</a>
	</LandingSlide>
</template>

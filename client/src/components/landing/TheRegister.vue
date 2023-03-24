<script setup>
	import LandingSlide from '@/components/landing/LandingSlide.vue'
	import TheRegisterForm from '@/components/landing/TheRegisterForm.vue'
</script>

<template>
	<LandingSlide class="relative" style="background: url('images/slide-light.webp') center / cover;">
		<a class="absolute top-0 left-0 right-0 py-8 lg:py-32 md:py-24 outline-none" href="#login">
			<img class="mx-auto rotate-180" src="icons/action-dark.svg" alt="">
		</a>
		<div class="container grid md:grid-cols-[4fr_8fr] md:items-start gap-16">
			<TheRegisterForm />
		</div>
	</LandingSlide>
</template>

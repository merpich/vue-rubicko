<script setup>
	import TheIntro from '@/components/intro/TheIntro.vue'
	import TheIntroRegister from '@/components/intro/TheIntroRegister.vue'
</script>

<template>
	<TheIntro>
		<section :class="$style['app-container']">
			<TheIntroRegister />
		</section>
	</TheIntro>
</template>

<style module>
	.app-container {
		@apply container max-w-[40rem];
	}
</style>

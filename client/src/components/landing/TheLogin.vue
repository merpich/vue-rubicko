<script setup>
	import TheLoginContent from './TheLoginContent.vue'
</script>

<template>
	<section class="login">
		<div class="login-wrapper">
			<TheLoginContent />
		</div>
	</section>
</template>

<style lang="scss">
	.login {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		padding: rem(200) 0;
		background: var(--bgc-secondary) url('images/slide-dark.webp') center / cover no-repeat;
		&-wrapper {
			display: grid;
			@include mediaWidth(min, 768) { grid-template-columns: 8fr 4fr; }
			gap: var(--gutter-xl);
			max-width: calc(rem(1200) + var(--gutter-s) * 2);
			padding: 0 var(--gutter-s);
			margin: 0 auto;
		}
	}
</style>

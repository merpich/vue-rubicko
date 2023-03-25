<script setup>
	import TheIntro from '@/components/auth/TheIntro.vue'
	import TheLink from '@/components/auth/TheLink.vue'
	import TheLogin from '@/components/auth/TheLogin.vue'
</script>

<template>
	<main class="app">
		<div class="app-container container">
			<div class="grid gap-8">
				<TheIntro />
				<TheLink />
			</div>
			<TheLogin />
		</div>
	</main>
</template>

<style lang="scss">
	.app {
		@apply min-h-full bg-slate-800 py-8 md:py-24 lg:py-40;
		background: url('images/bg-intro.jpg') center / cover no-repeat;

		&-container {
			@apply grid md:grid-cols-2 gap-8 md:gap-16 items-start;
		}

		&-blur {
			@apply backdrop-blur-lg bg-slate-500/10;
		}

		&-card {
			@apply sm:p-8 p-4 sm:-mx-0 -mx-3 rounded-xl;
		}

		&-gap {
			@apply gap-4 md:gap-8;
		}

		&-header {
			@apply flex items-center;
		}

		&-text {
			@apply text-2xl lg:text-4xl font-medium text-white;
		}

		&-form {
			@apply grid gap-8;
		}

		&-label {
			@apply text-xl text-white pb-2;
		}

		&-control {
			@apply py-2 lg:py-4 px-4 lg:px-8 rounded-xl outline-none text-xl text-white autofill:bg-transparent;
		}

		&-btn {
			@apply py-2 lg:py-4 lg:px-8 px-4 rounded-xl text-xl text-white outline-none transition-colors;
			&-primary {
				@apply app-btn bg-green-500 hover:bg-green-600 active:bg-green-400 focus:bg-green-600
			}
		}
	}

	input.app-control {
		@apply placeholder:text-slate-400/75;
	}

	img {
		&.app-icon {
			@apply select-none pointer-events-none;
		}
	}

	h1.app-title {
		@apply font-bold text-4xl lg:text-5xl text-white;
	}

	h2.app-title {
		@apply font-medium text-3xl text-white;
	}
</style>

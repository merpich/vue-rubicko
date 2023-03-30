<template>
	<main :class="$style['app-content']">
		<slot></slot>
	</main>
</template>

<style module>
	.app-content {
		@apply min-h-full py-8 md:pt-24 lg:pt-40 bg-slate-800;
		background: url('/images/bg-intro.jpg') center / cover no-repeat;
	}
</style>

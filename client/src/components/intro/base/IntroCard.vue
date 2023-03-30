<template>
	<div :class="$style['app-card']">
		<slot></slot>
	</div>
</template>

<style module>
	.app-card {
		@apply p-4 sm:p-8 -mx-3 sm:-mx-0
			grid gap-4 md:gap-8 rounded-2xl
			backdrop-blur-lg bg-slate-500/10;
	}
</style>

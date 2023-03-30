<template>
	<form :class="$style['app-form']">
		<slot></slot>
	</form>
</template>

<style module>
	.app-form {
		@apply grid gap-4 md:gap-8;
	}
</style>

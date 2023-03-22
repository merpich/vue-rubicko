<template>
	<div class="login-content">
		<header class="login-header">
			<img class="login-header__logo" src="icons/logo-light.svg" alt="">
			<h1 class="login-header__title">Rubicko</h1>
		</header>
		<p class="login-text">
			<span class="login-text__string">Место, где вы можете</span>
			<span class="login-text__string">создавать небольшие</span>
			<span class="login-text__string">веб-приложения</span>
		</p>
		<button class="login-button">
			Зарегистрироваться
		</button>
	</div>
</template>

<style lang="scss">
	.login {
		&-content {
			display: grid;
			gap: var(--gutter-l);
			@include mediaWidth('min', 540) { gap: var(--gutter-xl); }
			color: var(--fc-secondary);
		}

		&-header {
			display: flex;
			align-items: center;
			gap: var(--gutter-l);
			@include mediaWidth('min', 540) { gap: var(--gutter-xl); }
			&__logo {
				width: rem(72);
				@include mediaWidth('min', 540) { width: rem(96); }
				@include mediaWidth('min', 1024) { width: rem(128); }
			}
			&__title {
				font-size: rem(40);
				@include mediaWidth('min', 540) { font-size: rem(48); }
				@include mediaWidth('min', 1024) { font-size: rem(64); }
			}
		}

		&-text {
			font-size: rem(32);
			@include mediaWidth('min', 540) { font-size: rem(40); }
			@include mediaWidth('min', 1024) { font-size: rem(48); }
			font-weight: 500;
			& span {
				display: block;
			}
		}

		&-button {
			justify-self: start;
			padding: 0.8em 1.6em;
			border: none;
			background-color: var(--bgc-component);
			font-family: inherit;
			font-size: var(--fz-l);
			cursor: pointer;
			transition: background-color 0.2s ease-in-out 0s,
									color 0.2s ease-in-out 0s;
			&:hover {
				background-color: var(--bgc-secondary);
				color: var(--fc-secondary);
			}
		}
	}
</style>

<template>
	<div class="app-blur app-card app-gutter">
		<form class="app-form" method="post" @submit.prevent>
			<h2 class="app-title">Вход</h2>
			<div class="grid">
				<label class="app-label" for="email">Электронная почта</label>
				<input class="app-control w-full bg-slate-600/30" id="email" name="email" type="email">
			</div>
			<div class="grid">
				<label class="app-label" for="password">Пароль</label>
				<input class="app-control w-full bg-slate-600/30" id="password" name="password" type="password">
			</div>
			<button class="app-btn-primary">Войти</button>
		</form>
	</div>
</template>

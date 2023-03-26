<template>
	<div class="app-gutter-intro app-blur rounded-2xl">
		<form class="app-form-intro" method="post" @submit.prevent>
			<h2 class="app-title-intro">Регистрация</h2>
			<div class="grid">
				<label class="app-label-intro" for="email">Электронная почта</label>
				<input class="app-control-intro rounded-2xl" id="email" name="email" type="email">
				<p class="text-red-500">Ошибка</p>
			</div>
			<div class="grid">
				<label class="app-label-intro" for="password">Пароль</label>
				<input class="app-control-intro rounded-2xl" id="password" name="password" type="password">
				<p class="text-red-500">Ошибка</p>
			</div>
			<div class="grid">
				<label class="app-label-intro" for="password_repeat">Повтор пароля</label>
				<input class="app-control-intro rounded-2xl" id="password_repeat" name="password_repeat" type="password">
				<p class="text-red-500">Ошибка</p>
			</div>
			<button class="app-button-intro rounded-2xl">Зарегистрироваться</button>
			<RouterLink class="app-link-intro" to="/">Вход</RouterLink>
		</form>
	</div>
</template>

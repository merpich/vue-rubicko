<template>
	<main class="app-page">
		<div class="grid gap-8 md:gap-16">
			<div class="logo max-w-[600px] w-full mx-auto">
				<div class="app-blur app-card app-gutter">
					<form class="app-form" method="post" @submit.prevent>
						<h2 class="app-title">Регистрация</h2>
						<div class="grid">
							<label class="app-label" for="email">Электронная почта</label>
							<input class="app-control w-full bg-slate-600/30" id="email" name="email" type="email">
						</div>
						<div class="grid">
							<label class="app-label" for="password">Пароль</label>
							<input class="app-control w-full bg-slate-600/30" id="password" name="password" type="password">
						</div>
						<div class="grid">
							<label class="app-label" for="password_repeat">Повтор пароля</label>
							<input class="app-control w-full bg-slate-600/30" id="password_repeat" name="password_repeat" type="password">
						</div>
						<button class="app-btn-primary">Зарегистрироваться</button>
					</form>
				</div>
			</div>
		</div>
	</main>
</template>

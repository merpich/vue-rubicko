<script setup>
	import { ref } from 'vue'
	import { useRouter } from 'vue-router'
	import { useUserStore } from '@/stores/user'

	const loginData = ref({ email: '', password: '' })
	const error = ref('')
	const userStore = useUserStore()
	const router = useRouter()

	const login = async () => {
		const response = await userStore.login(loginData.value)

		if (response) {
			error.value = response[0].msg
			return
		}

		router.push('/' + userStore.userData.userName)
	}
</script>

<template>
	<div class="app-gutter-intro app-blur rounded-2xl">
		<form class="app-form-intro" method="post" @submit.prevent="login">
			<h2 class="app-title-intro">Вход</h2>
			<div class="grid">
				<label class="app-label-intro" for="email">Электронная почта</label>
				<input class="app-control-intro rounded-2xl" id="email" name="email" type="email" autocomplete="off" v-model="loginData.email">
				<p class="text-red-500" v-if="error">{{ error }}</p>
			</div>
			<div class="grid">
				<label class="app-label-intro" for="password">Пароль</label>
				<input class="app-control-intro rounded-2xl" id="password" name="password" type="password" v-model="loginData.password">
			</div>
			<button class="app-button-intro rounded-2xl">Войти</button>
			<RouterLink class="app-link-intro" to="register">Регистрация</RouterLink>
		</form>
	</div>
</template>

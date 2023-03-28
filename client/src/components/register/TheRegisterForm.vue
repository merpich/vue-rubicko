<script setup>
	import { ref } from 'vue'
	import { useRouter } from 'vue-router'
	import { useUserStore } from '@/stores/user'

	const data = ref({
		email: '',
		userName: '',
		password: ''
	})

	const errors = ref({
		userName: '',
		email: '',
		password: ''
	})

	const userStore = useUserStore()
	const router = useRouter()

	const register = async () => {
		const response = await userStore.register(data.value)

		Object.keys(errors.value).forEach(msg => errors.value[msg] = '')

		if (response) {
			response.forEach(error => {
				Object.keys(errors.value).forEach(msg => {
					if (msg === error.param) {
						errors.value[msg] = error.msg
					}
				})
			})

			return
		}

		router.push('/' + userStore.userData.userName)
	}
</script>

<template>
	<div class="app-gutter-intro app-blur rounded-2xl">
		<form class="app-form-intro" method="post" @submit.prevent="register">
			<h2 class="app-title-intro">Регистрация</h2>
			<div class="grid">
				<label class="app-label-intro" for="username">Имя пользователя</label>
				<input
					class="app-control-intro rounded-2xl"
					id="username"
					name="username"
					type="text"
					autocomplete="off"
					v-model="data.userName"
				/>
				<p class="text-red-500" v-if="errors.userName">{{ errors.userName }}</p>
			</div>
			<div class="grid">
				<label class="app-label-intro" for="email">Электронная почта</label>
				<input
					class="app-control-intro rounded-2xl"
					id="email"
					name="email"
					type="email"
					autocomplete="off"
					v-model="data.email"
				/>
				<p class="text-red-500" v-if="errors.email">{{ errors.email }}</p>
			</div>
			<div class="grid">
				<label class="app-label-intro" for="password">Пароль</label>
				<input
					class="app-control-intro rounded-2xl"
					id="password"
					name="password"
					type="password"
					min="8"
					v-model="data.password"
				/>
				<p class="text-red-500" v-if="errors.password">{{ errors.password }}</p>
			</div>
			<button class="app-button-intro rounded-2xl">Зарегистрироваться</button>
			<RouterLink class="app-link-intro" to="/">Вход</RouterLink>
		</form>
	</div>
</template>

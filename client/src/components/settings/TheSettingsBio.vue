<script setup>
	import { ref, onBeforeMount } from 'vue'
	import { useUserStore } from '../../stores/user'

	import {
		BaseButton, BaseLabel,
		BaseInput, BaseTextarea
	} from '../base'

	const userData = ref({})
	const userStore = useUserStore()

	const saveData = async () => {
		const data = {}

		if (userData.value.userName !== userStore.userData.userName) {
			data.userName = userData.value.userName
		}

		if (userData.value.fullName !== userStore.userData.fullName) {
			data.fullName = userData.value.fullName
		}

		if (userData.value.userBio !== userStore.userData.userBio) {
			data.userBio = userData.value.userBio
		}

		await userStore.update(data)
	}

	onBeforeMount(() => userData.value = { ...userStore.userData })
</script>

<template>
	<div class="grid gap-4">
		<h2 class="text-lg font-semibold">Данные профиля</h2>
		<form class="max-w-xs grid gap-4" method="post" @submit.prevent>
			<div class="grid">
				<BaseLabel text="Никнейм" for="userName" />
				<BaseInput type="text" id="userName" :value="userData.userName" v-model="userData.userName" />
			</div>
			<div class="grid">
				<BaseLabel text="Имя" for="name" />
				<BaseInput type="text" id="name" :value="userData.fullName" v-model="userData.fullName" />
			</div>
			<div class="grid">
				<BaseLabel text="О себе" for="userBio" />
				<BaseTextarea id="userBio" cols="30" rows="5" :value="userData.userBio" v-model="userData.userBio" />
			</div>
			<BaseButton class="justify-self-start" @click="saveData">
				Сохранить
			</BaseButton>
		</form>
	</div>
</template>

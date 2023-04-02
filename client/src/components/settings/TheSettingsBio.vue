<script setup>
	import { BaseLoader, BaseButton, BaseLabel, BaseInput, BaseTextarea } from '../base'

	defineProps({
		data: {
			type: Object,
			required: true
		},
		success: {
			type: Boolean,
			default() {
				return false
			}
		}
	})

	const emits = defineEmits(['save'])
	const save = () => emits('save')
</script>

<template>
	<div class="grid gap-4">
		<h2 class="text-lg font-semibold">Данные профиля</h2>
		<form class="max-w-xs grid gap-4" method="post" @submit.prevent>
			<div class="grid">
				<BaseLabel text="Никнейм" for="userName" />
				<BaseInput type="text" id="userName" :value="data.userName" v-model="data.userName" />
			</div>
			<div class="grid">
				<BaseLabel text="Имя" for="name" />
				<BaseInput type="text" id="name" :value="data.fullName" v-model="data.fullName" />
			</div>
			<div class="grid">
				<BaseLabel text="О себе" for="userBio" />
				<BaseTextarea id="userBio" cols="30" rows="5" :value="data.userBio" v-model="data.userBio" />
			</div>
			<BaseButton class="justify-self-start" @click="save">
				Сохранить
			</BaseButton>
			<p class="text-slate-900" v-if="success">Данные обновлены</p>
		</form>
	</div>
</template>

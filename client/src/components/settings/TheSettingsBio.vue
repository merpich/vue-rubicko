<script setup>
	import { BaseButton } from '../base'

	const props = defineProps({
		data: {
			type: Object,
			reqiored: true
		}
	})
</script>

<template>
	<div class="grid gap-4">
		<h2 class="text-lg font-semibold">Данные профиля</h2>
		<form class="max-w-xs grid gap-4" method="post" @submit.prevent>
			<div class="grid">
				<label class="pb-1 text-base text-slate-900" for="userName">Никнейм</label>
				<input class="py-2 px-4 shadow bg-white rounded-2xl outline-none text-base text-slate-900" type="text" id="userName" name="userName">
			</div>
			<div class="grid">
				<label class="pb-1 text-base text-slate-900" for="name">Имя</label>
				<input class="py-2 px-4 shadow bg-white rounded-2xl outline-none text-base text-slate-900" type="text" id="name" name="name">
			</div>
			<div class="grid">
				<label class="pb-1 text-base text-slate-900" for="userBio">О себе</label>
				<textarea class="py-2 px-4 shadow bg-white rounded-2xl outline-none text-base text-slate-900" name="userBio" id="userBio" cols="30" rows="5"></textarea>
			</div>
			<BaseButton class="justify-self-start">
				Сохранить
			</BaseButton>
		</form>
	</div>
</template>

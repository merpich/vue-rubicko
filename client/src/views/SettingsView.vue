<script setup>
	import { ref, onBeforeMount } from 'vue'
	import { useUserStore } from '../stores/user'
	import { BaseLoader } from '../components/base'
	import TheSettingsAvatar from '../components/settings/TheSettingsAvatar.vue'
	import TheSettingsBio from '../components/settings/TheSettingsBio.vue'

	const loading = ref(false)
	const success = ref(false)
	const userStore = useUserStore()
	const userData = ref({})

	const fetchData = async () => {
		try {
			loading.value = true
			userData.value =  await userStore.getMe()
			loading.value = false
		} catch (error) {
			loading.value = false
		}
	}

	onBeforeMount(() => fetchData())

	const uploadAvatar = async (data) => {
		const formData = new FormData()
		formData.append('image', data)
		const response = await userStore.update(formData)
		userData.value.avatarUrl = response.data.avatarUrl
	}

	const removeAvatar = async () => {
		await userStore.update({ avatarUrl: null })
		userData.value.avatarUrl = null
	}

	const updateBio = async () => {
		await userStore.update(userData.value)
		success.value = true
	}
</script>

<template>
	<BaseLoader class="mx-auto my-10" v-if="loading" />
	<div class="grid gap-8" v-if="!loading">
		<h1 class="text-2xl text-slate-900 font-bold">Настройки</h1>
		<div class="grid gap-6">
			<TheSettingsAvatar
				:avatarUrl="userData.avatarUrl"
				@upload="uploadAvatar"
				@remove="removeAvatar"
			/>
			<TheSettingsBio
				:data="userData"
				:loading="loading"
				:success="success"
				@save="updateBio"
			/>
		</div>
	</div>
</template>

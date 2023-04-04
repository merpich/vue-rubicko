<script setup>
	import { useRouter } from 'vue-router'
	import { useUserStore } from '../../stores/user'
	import { BaseButton } from '../base'

	const userStore = useUserStore()
	const router = useRouter()

	const logout = () => {
		userStore.logout()
		router.push('/')
	}
</script>

<template>
	<nav class="absolute top-[calc(100%+1rem)] right-0 p-4 w-72 bg-white shadow rounded-2xl">
		<ul>
			<li>
				<BaseButton class="w-full" @click="logout">
					Выйти
				</BaseButton>
			</li>
		</ul>
	</nav>
</template>

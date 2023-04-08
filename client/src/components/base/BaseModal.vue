<script setup>
	defineProps({
		title: {
			type: String,
			default() {
				return ''
			}
		}
	})

	const emits = defineEmits(['close'])
	const closeModal = () => emits('close')
</script>

<template>
	<div class="fixed left-1/2 top-1/4 -translate-x-1/2 max-w-md w-full rounded-2xl bg-white shadow overflow-hidden">
		<header class="flex justify-between px-6 py-4">
			<h3 class="text-xl font-semibold">{{ title }}</h3>
			<button class="group outline-none" @click="closeModal">
				<svg class="fill-red-500 group-hover:fill-red-600 group-focus-visible:fill-red-600 group-active:fill-red-700 transition-colors" width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10ZM6.97 6.97C7.11063 6.82955 7.30125 6.75066 7.5 6.75066C7.69875 6.75066 7.88937 6.82955 8.03 6.97L10 8.94L11.97 6.97C12.1122 6.83752 12.3002 6.7654 12.4945 6.76882C12.6888 6.77225 12.8742 6.85097 13.0116 6.98838C13.149 7.12579 13.2277 7.31118 13.2312 7.50548C13.2346 7.69978 13.1625 7.88782 13.03 8.03L11.06 10L13.03 11.97C13.1625 12.1122 13.2346 12.3002 13.2312 12.4945C13.2277 12.6888 13.149 12.8742 13.0116 13.0116C12.8742 13.149 12.6888 13.2277 12.4945 13.2312C12.3002 13.2346 12.1122 13.1625 11.97 13.03L10 11.06L8.03 13.03C7.88782 13.1625 7.69978 13.2346 7.50548 13.2312C7.31118 13.2277 7.12579 13.149 6.98838 13.0116C6.85097 12.8742 6.77225 12.6888 6.76882 12.4945C6.7654 12.3002 6.83752 12.1122 6.97 11.97L8.94 10L6.97 8.03C6.82955 7.88937 6.75066 7.69875 6.75066 7.5C6.75066 7.30125 6.82955 7.11063 6.97 6.97Z"/>
				</svg>
			</button>
		</header>
		<hr class="bg-slate-200">
		<div class="px-6 py-4 bg-slate-100">
			<slot></slot>
		</div>
	</div>
</template>

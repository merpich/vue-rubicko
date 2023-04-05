<script setup>
	import { ref } from 'vue'
	import CodeWorkspace from '../components/code/CodeWorkspace.vue'

	const data = ref({
		html: '',
		css: '',
		js: ''
	})
</script>

<template>
	<div class="lg:grid lg:grid-cols-3">
		<CodeWorkspace
			label="HTML"
			lang="html"
			v-model="data.html"
		/>
		<CodeWorkspace
			label="CSS"
			lang="css"
			v-model="data.css"
		/>
		<CodeWorkspace
			label="JavaScript"
			lang="javascript"
			v-model="data.js"
		/>
	</div>
</template>

<script setup>
	import TheCodeEditor from '../components/code/TheCodeEditor.vue'
	import TheCodePreview from '../components/code/TheCodePreview.vue'
</script>

<template>
	<div class="grid grid-rows-[auto_1fr] h-[calc(100%-3.5rem)] overflow-hidden">
		<TheCodeEditor />
		<TheCodePreview />
	</div>
</template>

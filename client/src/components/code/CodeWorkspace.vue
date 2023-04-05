<script setup>
	import { VAceEditor } from 'vue3-ace-editor'

	import 'ace-builds/src-min-noconflict/mode-html'
	import 'ace-builds/src-min-noconflict/mode-css'
	import 'ace-builds/src-min-noconflict/mode-javascript'
	import 'ace-builds/src-min-noconflict/snippets/html'
	import 'ace-builds/src-min-noconflict/snippets/css'
	import 'ace-builds/src-min-noconflict/snippets/javascript'
	import 'ace-builds/src-min-noconflict/theme-dracula'
	import 'ace-builds/src-min-noconflict/ext-language_tools'

	const options = {
		fontSize: 14,
		tabSize: 2,
		enableBasicAutocompletion: true,
		enableSnippets: true
	}

	defineProps({
		label: {
			type: String,
			required: false
		},
		lang: {
			type: String,
			required: true
		},
		modelValue: {
			type: String,
			required: false,
			default() {
				return ''
			}
		}
	})

	const emit = defineEmits(['update:modelValue'])
	const update = (value) => emit('update:modelValue', value)
</script>

<template>
	<div class="bg-[#282a36]">
		<div class="flex">
			<h2 class="px-3 py-1 text-white inline-block border-t-2 border-x-2 border-slate-600 rounded-t-2xl">{{ label }}</h2>
			<div class="border-b-2 border-slate-600 w-full"></div>
		</div>

		<VAceEditor
			class="h-80 border-l-2 border-b-2 border-slate-600"
			theme="dracula"
			:lang="lang"
			:options="options"
			:value="modelValue"
			@update:value="update"
		/>
	</div>
</template>

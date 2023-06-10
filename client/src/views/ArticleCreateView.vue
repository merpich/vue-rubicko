<script setup>
	import { ref } from 'vue'
	import { useRouter } from 'vue-router'

	import { useArticleStore } from '../stores/article'

	import {
		BaseLabel, BaseFile, BaseInput,
		BaseTextarea, BaseButton
	} from '../components/base'

	const articleData = ref({
		title: '',
		text: '',
		image: '',
		tag: 'html'
	})

	const articleStore = useArticleStore()
	const router = useRouter()

	const uploadImage = (event) => {
		 articleData.value.image = event.target.files[0]
	}

	const updateArtice = async () => {
		const formData = new FormData()

		formData.append('image', articleData.value.image)
		formData.append('title', articleData.value.title)
		formData.append('tag', articleData.value.tag)
		formData.append('text', articleData.value.text)

		await articleStore.create(formData)

		router.push(`/article/${articleStore.articleData._id}`)
	}
</script>

<template>
	<div class="grid gap-8">
		<h1 class="text-2xl text-slate-900 font-bold">Создание статьи</h1>

		<form class="grid gap-4" method="post" enctype="multipart/form-data" @submit.prevent="updateArtice">
			<div class="grid max-w-md">
				<BaseLabel text="Заставка статьи" for="preview" />
				<BaseFile
					id="preview"
					name="image"
					@input="uploadImage"
				/>
			</div>
			<div class="grid max-w-md">
				<BaseLabel text="Заголовок статьи" for="title" />
				<BaseInput
					type="text"
					id="title"
					name="title"
					v-model="articleData.title"
				/>
			</div>
			<div class="grid max-w-md">
				<BaseLabel text="Тэг статьи" for="tag" />
				<select
					class="py-2 px-4 shadow bg-white rounded-2xl text-base text-slate-900"
					name="tag"
					id="tag"
					v-model="articleData.tag"
				>
					<option value="html">html</option>
					<option value="css">css</option>
					<option value="javascript">javascript</option>
				</select>
			</div>
			<div class="grid">
				<BaseLabel text="Содержание статьи" for="content" />
				<BaseTextarea
					id="content"
					rows="10"
					name="content"
					v-model="articleData.text"
				/>
			</div>

			<BaseButton class="justify-self-start">
				Создать
			</BaseButton>
		</form>
	</div>
</template>

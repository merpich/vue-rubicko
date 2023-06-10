<script setup>
	import { RouterLink } from 'vue-router'

	const tags = {
		html: '/news?cat=articles&tag=html',
		css: '/news?cat=articles&tag=css',
		javascript: '/news?cat=articles&tag=javascript',
	}
</script>

<template>
	<div class="p-4 bg-white shadow rounded-2xl sticky top-20">
		<div>
			<h3 class="mb-4 text-xl font-medium text-slate-900">Теги</h3>
			<ul>
				<li class="w-full mb-2">
					<RouterLink class="block py-2 px-4 hover:bg-slate-200 rounded-full transition-colors" to="news?cat=articles">
						Все тэги
					</RouterLink>
				</li>
				<li class="w-full mb-2">
					<RouterLink class="block py-2 px-4 hover:bg-slate-200 rounded-full transition-colors" :to="tags.html">
						# html
					</RouterLink>
				</li>
				<li class="w-full mb-2">
					<RouterLink class="block py-2 px-4 hover:bg-slate-200 rounded-full transition-colors" :to="tags.css">
						# css
					</RouterLink>
				</li>
				<li class="w-full">
					<RouterLink class="block py-2 px-4 hover:bg-slate-200 rounded-full transition-colors" :to="tags.javascript">
						# javascript
					</RouterLink>
				</li>
			</ul>
		</div>
	</div>
</template>

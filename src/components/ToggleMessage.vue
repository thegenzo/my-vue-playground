<script setup>
import { computed, ref, reactive } from 'vue';

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// computed ref example
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes': 'No'
})

// toggle hidden message
const hide = ref(true)
const toggleHiddenMessage = () => {
  hide.value = !hide.value
}
</script>

<template>
 	<div class="toggle">
		<h3>Toggle Message Component</h3>
		<p>Has published books: <span>{{ publishedBooksMessage }}</span></p>
		<button style="margin-top: 20px" @click="toggleHiddenMessage()">Toggle Message</button>
		<div>
		<p v-if="hide">Show some facts about you</p>
		<p v-else>Fck you	</p>
		</div>
	</div>
</template>

<style scoped>
	.toggle {
		width: 300px;
		border: 1px solid #f6123f;
		padding: 1rem;
	}
</style>
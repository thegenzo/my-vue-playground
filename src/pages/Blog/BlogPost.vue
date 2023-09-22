<script setup>
defineProps(['title'])
defineEmits([
	'enlarge-text',
	'reduce-text'
])
</script>

<template>
	<div>
		<h4>{{ title }}</h4>
		<router-link :to="{ name: 'BlogCreate' }">Create Blog</router-link>
		<br>
		<button @click="$emit('enlarge-text')">Enlarge text</button>
		<button @click="$emit('reduce-text')">Reduce text</button>
	</div>
</template>

<style scoped>
button {
	margin: 30px 10px 10px 30px;
}
</style>
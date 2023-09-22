<template>
	<div>
		<h3>My name is: {{ name }}</h3>
		<input type="text" v-model="name">
	</div>
</template>

<script setup>
import { ref } from 'vue';
const name = ref('')

</script>
<script setup>
defineProps(['title', 'class'])
</script>

<template>
	<div>
		<a :class="class">{{ title }}</a>
	</div>
</template>

<style scoped>
	a {
		padding: 5px;
		margin: 5px;
		color: black;
	}

	a.success {
		background-color: rgb(56, 217, 31);
	}

	a.danger {
		background-color: rgb(217, 2, 2);
	}
</style>
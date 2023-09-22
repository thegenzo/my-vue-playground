<template>
	<div>
		<h4>Id = {{ this.$route.params.id }}</h4>
		<button @click.prevent="$router.back()">Show all messages</button>
	</div>
</template>

<script setup>

</script>

<style scoped>

</style>
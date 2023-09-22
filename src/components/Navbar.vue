<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/message">Message</router-link> | 
		<router-link to="/watchers">Watchers</router-link> |
		<router-link :to="{ name: 'BlogPost' }">Blog</router-link>
	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
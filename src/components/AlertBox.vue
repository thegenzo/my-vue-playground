<script setup>

</script>

<template>
	<Transition>
		<div class="alert-box">
			<strong>Error Message</strong>
			<slot />
		</div>
	</Transition>
</template>

<style scoped>
	.alert-box {
		border: 1px solid red;
		margin: 20px 0 10px 0;
		padding: 1rem;
		width: 400px;
	}
	.alert-box strong {
		color: red;
	}

	/* we will explain what these classes do next! */
	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.5s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
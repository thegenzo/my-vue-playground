<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/message">Message</router-link> | 
		<router-link to="/watchers">Watchers</router-link> |
		<router-link :to="{ name: 'BlogPost' }">Blog</router-link> |
		<button @click="logout">Logout</button>
	</div>
</template>

<script setup>
import axios from '../config/axios'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification';

const router = useRouter()
const toast = useToast()

const logout = async () => {
	await axios.post('/logout', null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  })
		.then((response) => {
			// clear JWT token from storage
			localStorage.removeItem('jwtToken')
			toast.success(response.data.message, {
				position: 'top-right'
			})
			router.push({ name: 'Login' })
		})
		.catch((error) => {
			toast.error(error.message, {
				position: 'top-right'
			})
		})
}
</script>

<style lang="scss" scoped>

</style>
<template>
	<v-container fluid>
		<v-row justify="center">
			<v-col cols="12" sm="8" md="6">
				<v-card>
					<v-card-title class="headline">
						Login
					</v-card-title>
					<v-card-text>
						<v-form @submit.prevent="login">
							<v-text-field type="email" v-model="state.email" label="Email" outlined required></v-text-field>
							<v-text-field type="password" v-model="state.password" label="Password" outlined required></v-text-field>
							<v-btn color="primary" type="submit">Login</v-btn>
						</v-form>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { reactive } from 'vue'
import axios from '../../config/axios'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification';

const router = useRouter()
const toast = useToast()

const state = reactive({
	email: '',
	password: ''
})

const login = async () => {
	console.log(state.email, state.password)
	await axios.post('/login', {
		'email': state.email,
		'password': state.password
	})
	.then((response) => {
		console.log(response)
		const token = response.data.token
		localStorage.setItem('jwtToken', token)
		router.push({ name: 'MessageIndex' })
		toast.success(response.data.message, {
			position: 'top-right'
		})
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
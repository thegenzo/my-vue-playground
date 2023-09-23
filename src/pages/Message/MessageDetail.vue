<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const message = ref({})

onMounted(async () => {
	const data = await axios.get(`http://localhost:8000/api/message/${route.params.id}`)
	console.log(data.data.data)
	message.value = data.data.data
})

const deleteMessage = async (id) => {
	const confirmed = window.confirm('Are you sure you want to delete this message?');
	if(confirmed) {
		await axios.delete(`http://localhost:8000/api/message/${message.value.id}`)
		router.push({ name: 'MessageIndex' })
	}
}
</script>

<template>
	<v-container>
		<v-row>
			<v-col cols="6">
				<v-card>
					<v-card-title class="bg-info">Message ID = {{ message.id }}</v-card-title>
					<v-card-text class="pa-5">
						<h4>From = {{ message.from }}</h4>
						<h4>To = {{ message.to }}</h4>
						<p>{{ message.content }}</p>
						<div class="d-flex justify-center align-center">
							<v-btn @click.prevent="deleteMessage(message.id)" class="bg-red mx-3">Delete</v-btn>
							<v-btn @click.prevent="$router.back()" class="bg-yellow">Show all messages</v-btn>
						</div>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>

</style>
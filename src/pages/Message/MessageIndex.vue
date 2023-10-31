<script setup>
import AlertBox from '../../components/AlertBox.vue'
import axios from 'axios';
import { onMounted, ref, inject } from 'vue';

const messages = ref([])
const error = ref('')
const isLoading = ref(true)

const backendUrl = inject('backendUrl')

onMounted( async () => {
	await axios.get(`${backendUrl}/message`)
		.then((res) => {
			messages.value = res.data.data
			isLoading.value = !isLoading.value
		})
		.catch((err) => {
			error.value = err.message
			isLoading.value = !isLoading.value
		})
})
</script>

<template>
	<v-container>
		<v-row>
			<v-col row="6" sm="6">
				<v-card>
					<v-card-title class="bg-pink">Message Component</v-card-title>
					<v-card-text class="pa-5">
						<router-link :to="{ name: 'MessageCreate' }">
							<v-btn class="bg-secondary">Create new message</v-btn>
						</router-link>
						<TransitionGroup name="list" tag="ul" class="ma-5">
							<li v-for="message in messages" :key="message.id" class="my-4">
								<p>From: {{ message.from }} - To: {{ message.to }}</p>
								<small>{{ new Date(message.created_at).toDateString() }}</small>
								<br>
								<router-link :to="{ name: 'MessageDetail', params: { id: message.id } }">{{ message.content.substring(0,50) + "...(Click for details)" }}</router-link>
							</li>
							<h3 v-if="isLoading">Loading...</h3>
							<AlertBox v-if="error">
								<h3 class="text-red">{{ error }}</h3>
							</AlertBox>
						</TransitionGroup>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
	.messages {
		margin: 10px 0 10px 0;
	}

	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}

	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
</style>
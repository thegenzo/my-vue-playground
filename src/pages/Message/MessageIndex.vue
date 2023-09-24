<script setup>
import AlertBox from '../../components/AlertBox.vue'
import axios from 'axios';
import { onMounted, ref } from 'vue';

const messages = ref([])

onMounted( async () => {
	const data = await axios.get('http://localhost:8000/api/message')
	console.log(data)
	messages.value = data.data.data
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
							<li v-for="message in messages" :key="message.id" class="my-3" v-if="messages.length > 0">
								<p>From: {{ message.from }} - To: {{ message.to }}</p>
								<router-link :to="{ name: 'MessageDetail', params: { id: message.id } }">{{ message.content.substring(0,50) + "...(Click for details)" }}</router-link>
							</li>
							<AlertBox>
								<h3 class="text-red">No data found!</h3>
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
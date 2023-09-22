<script setup>
const messages = [
	{ id: '1', data: 'Why are u gae?' },
	{ id: '2', data: 'u are gae' },
	{ id: '3', data: 'u are transgenda' },
	{ id: '4', data: 'so who is geh?' },
]
</script>

<template>
	<v-container>
		<v-row>
			<v-col row="5" sm="5">
				<v-card>
					<v-card-title class="bg-pink">Message Component</v-card-title>
					<v-card-text>
						<TransitionGroup name="list" tag="ul" class="ma-5">
							<li v-for="message in messages" :key="message.id">
								<router-link :to="{ name: 'MessageDetail', params: { id: message.id } }">{{ message.data }}</router-link>
							</li>
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
<script setup>
import axios from 'axios'
import { onMounted, ref, reactive, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification';

const route = useRoute()
const router = useRouter()

const message = ref({})
const toggleEdit = ref(false)
const state = reactive({
	from: '',
	to: '',
	content: ''
})

const backendUrl = inject('backendUrl')

const errors = ref([])

const toast = useToast()

const onToggleEdit = () => {
	toggleEdit.value = !toggleEdit.value
}

onMounted(async () => {
	await axios.get(`${backendUrl}/message/${route.params.id}`)
		.then((res) => {
			state.from = res.data.data.from
			state.to = res.data.data.to
			state.content = res.data.data.content
			message.value = res.data.data
		})
		.catch((err) => {
			console.log(err.message)
		})
})

const deleteMessage = async (id) => {
	const confirmed = window.confirm('Are you sure you want to delete this message?');
	if(confirmed) {
		await axios.delete(`${backendUrl}/message/${message.value.id}`)
			.then((res) => {
				router.push({ name: 'MessageIndex' })
				toast.success(res.data.message, {
					position: 'top-right'
				})
			})
			.catch((err) => {
				toast.error(err.response.data.message, {
					position: 'top-right'
				})
			})
	}
}

const onUpdate = async (id) => {
	await axios.put(`${import.meta.env.VITE_BACKEND_URL}/message/${route.params.id}`, {
		from: state.from,
		to: state.to,
		content: state.content
	})
	.then((res) => {
		router.push({ name: 'MessageIndex' })
		toast.success(res.data.message, {
			position: 'top-right'
		})
	})
	.catch((err) => {
		errors.value = err.response.data.data
		toast.error(err.response.data.message, {
			position: 'top-right'
		})
	})

}
</script>

<template>
	<v-container>
		<v-row>
			<v-col cols="6">
				<v-card v-if="!toggleEdit">
					<v-card-title class="bg-info">Message ID = {{ message.id }}</v-card-title>
					<v-card-text class="pa-5">
						<h4>From = {{ message.from }}</h4>
						<h4>To = {{ message.to }}</h4>
						<p>{{ message.content }}</p>
						<div class="d-flex justify-center align-center">
							<v-btn @click.prevent="onToggleEdit" class="bg-yellow mx-3">Edit</v-btn>
							<v-btn @click.prevent="deleteMessage(message.id)" class="bg-red mx-3">Delete</v-btn>
							<v-btn @click.prevent="$router.back()" class="bg-primary">Show all messages</v-btn>
						</div>
					</v-card-text>
				</v-card>
				<v-card v-if="toggleEdit">
					<v-card-title class="bg-yellow">Edit Message</v-card-title>
					<v-card-text class="pa-5">
						<v-form @submit.prevent="onUpdate">
							<v-text-field v-model="state.from" label="From..."></v-text-field>
							<v-alert class="bg-red my-3" v-if="errors.from">{{ errors.from[0] }}</v-alert>
							<v-text-field v-model="state.to" label="To..."></v-text-field>
							<v-alert class="bg-red my-3" v-if="errors.to">{{ errors.to[0] }}</v-alert>
							<v-textarea v-model="state.content" label="Content..."></v-textarea>
							<v-alert class="bg-red my-3" v-if="errors.content">{{ errors.content[0] }}</v-alert>
							<v-btn type="submit" class="bg-success">Submit</v-btn>
							<v-btn @click.prevent="onToggleEdit" class="bg-warning ml-3">Cancel Edit</v-btn>
						</v-form>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>

</style>
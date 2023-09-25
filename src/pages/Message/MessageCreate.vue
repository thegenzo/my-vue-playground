<template>
	<v-container>
		<v-row>
			<v-col cols="6">
				<v-card class="pa-5">
					<v-card-title class="bg-primary">Create new message</v-card-title>
					<v-form @submit.prevent="onSubmit">
						<v-card-text>
							<v-text-field v-model="state.from" label="From..."></v-text-field>
							<v-alert class="bg-red my-3" v-if="errors.from">{{ errors.from[0] }}</v-alert>
							<v-text-field v-model="state.to" label="To..."></v-text-field>
							<v-alert class="bg-red my-3" v-if="errors.to">{{ errors.to[0] }}</v-alert>
							<v-textarea v-model="state.content" label="Content..."></v-textarea>
							<v-alert class="bg-red my-3" v-if="errors.content">{{ errors.content[0] }}</v-alert>
						</v-card-text>
						<v-btn type="submit" class="bg-success">Submit</v-btn>
						<v-btn class="bg-warning ml-3" @click.prevent="$router.back()">Back</v-btn>
					</v-form>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const state = reactive({
	from: '',
	to: '',
	content: ''
})

const errors = ref([])

const onSubmit = async () => {
	console.log(`${state.from}, ${state.to}, ${state.content}`)
	await axios.post('http://localhost:8000/api/message', {
		from: state.from,
		to: state.to,
		content: state.content
	})
	.then((res) => {
		if(res.status === 201) {
			router.push({ name: 'MessageIndex' })
		}
	})
	.catch((err) => {
		errors.value = err.response.data.data
		console.log(err)
	})
}
</script>

<style scoped>

</style>
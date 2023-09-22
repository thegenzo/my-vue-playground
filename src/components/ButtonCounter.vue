<script setup>
// Button Counter
// Taking the data from state management: Pinia :)
import AlertBox from './AlertBox.vue'
import { useCounterStore } from '../store/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

const { count, value } = storeToRefs(store)
const { increment, decrement, reset } = store

</script>

<template>
	<v-container>
		<v-row>
			<v-col cols="5" sm="5">
				<v-card>
					<v-card-title class="bg-success">Counter Component</v-card-title>
					<v-card-text>
						<h2 style="text-align: center" class="mt-5">{{ count }}</h2>
						<br>
						<AlertBox v-if="value === ''">
							<h3 style="color: red">Value cannot be empty</h3>
						</AlertBox>
						<v-text-field type="number" v-model="value" aria-placeholder="Insert value number for counter" />
						<br>
						<div class="d-flex justify-center align-center">
							<v-btn prepend-icon="$vuetify" variant="tonal" class="bg-info" @click="increment" :disabled="value === ''">
								Increment
							</v-btn>
							<v-btn prepend-icon="$vuetify" variant="tonal" class="bg-red" @click="decrement" :disabled="value === ''">
								Decrement
							</v-btn>
						</div>
						<div class="d-flex justify-center align-center">
							<v-btn prepend-icon="$vuetify" variant="tonal" class="bg-warning" @click="reset">Reset</v-btn>
						</div>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
	button {
		margin: 10px;
	}
</style>
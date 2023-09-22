import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
	// state
	const count = ref(0)
	const value = ref(0)
	const name = ref('TheGenzo')

	// getters
	const doubleIncrement = computed(() => count.value * 2)

	// actions
	function increment() {
		const numericValue = parseFloat(value.value)
		if(!isNaN(numericValue)) {
			count.value += parseInt(value.value)
		}
	}
	function decrement() {
		const numericValue = parseFloat(value.value)
		if(!isNaN(numericValue)) {
			count.value -= parseInt(value.value)
		}
	}
	function reset() {
		count.value = 0
		value.value = 0
	}

	return {
		count, value, name, doubleIncrement, increment, decrement, reset
	}
})
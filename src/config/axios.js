import axios from "axios"
import { backendUrl } from "./config"

const instance = axios.create({
	baseURL: backendUrl // backend API URL
})

instance.interceptors.request.use((config) => {
	const token = localStorage.getItem('jwtToken') // retrieve the token from storage
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	return config
})

export default instance
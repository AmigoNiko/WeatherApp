import Axios, { AxiosInstance } from 'axios';

// Configured axios instance
const api: AxiosInstance = Axios.create({
	baseURL: '/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default api;

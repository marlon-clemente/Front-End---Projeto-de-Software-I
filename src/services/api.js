import axios from 'axios';

const api = axios.create({
	baseURL: 'https://ps1-backend.herokuapp.com'
});

export default api;
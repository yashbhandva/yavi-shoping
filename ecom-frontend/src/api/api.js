import axios from "axios";

// Ensure backend URL is properly set
const backendUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
const api = axios.create({
    baseURL: `${backendUrl}/api`,
    withCredentials: true,
});

console.log('API Base URL:', `${backendUrl}/api`);

export default api;
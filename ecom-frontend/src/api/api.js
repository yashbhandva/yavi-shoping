import axios from "axios";

// Ensure backend URL is properly set
const backendUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
const api = axios.create({
    baseURL: `${backendUrl}/api`,
    withCredentials: true,
});

console.log('API Base URL:', `${backendUrl}/api`);

// Add request interceptor to include JWT token from localStorage
api.interceptors.request.use(
    (config) => {
        const auth = localStorage.getItem('auth');
        if (auth) {
            const user = JSON.parse(auth);
            if (user?.jwtToken) {
                config.headers.Authorization = `Bearer ${user.jwtToken}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
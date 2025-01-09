import axios from "axios";

const BASE_URL = 'https://pos.minthiha.com/api';

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('TOKEN');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.log("API Error, error")
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("TOKEN");
            console.error("Unauthorized access, redirecting to auth page");
            // Optionally use React Router's navigate() here instead
        }
        return Promise.reject(error); // Reject the error explicitly
    }
);


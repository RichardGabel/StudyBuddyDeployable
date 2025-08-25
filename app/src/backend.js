import axios from 'axios'

const connection = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
    method: ["GET", "POST", "DELETE", "PUT", "PATCH"]
});

export default connection;
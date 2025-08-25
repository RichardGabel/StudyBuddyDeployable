import axios from 'axios'

const connection = axios.create({
    baseURL: "https://studybuddydeployable.onrender.com",
    withCredentials: true,
    method: ["GET", "POST", "DELETE", "PUT", "PATCH"]
});

export default connection;
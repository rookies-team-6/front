import axios from "axios";

axios.defaults.withCredentials = true;

export const serverInstance = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}`
})

export const devServerInstance = axios.create()
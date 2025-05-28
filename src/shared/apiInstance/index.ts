import axios from "axios";

export const serverInstance = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}`
})

export const devServerInstance = axios.create()
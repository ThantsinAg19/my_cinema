import axios from 'axios';

const BASE_IMG_URL = 'https://www.themoviedb.org';
const BASE_URL = process.env.REACT_APP_BASE_URL
const MOV_API_KEY = process.env.REACT_APP_MOV_API_KEY

const axiosInstance = axios.create({
    baseURL:BASE_URL,
    timeout: 10000
})

axiosInstance.interceptors.request.use(config=>{
    config.url += `?api_key=${MOV_API_KEY}`;
    return config;
})

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    async function (error) {
        const data = error?.response?.data || {};
        return Promise.resolve(data);
    }
)

export {
    axiosInstance,
    BASE_IMG_URL,
    BASE_URL,
    MOV_API_KEY,
}
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://api.open-meteo.com/v1/',
    timeout: 1000,
});

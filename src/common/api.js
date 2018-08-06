// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
// Set common parameters for each request to the API.
config.params.APPID = '465a9f6b755c6213dbe81e2f56536fd5';
config.params.units = 'imperial';

return config;
}, function (error) {
    return Promise.reject(error);
});

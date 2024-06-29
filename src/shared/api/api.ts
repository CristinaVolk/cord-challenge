import axios from 'axios';
import {MAIN_URL, IMAGE_URL, AUTH_TOKEN} from "../../config";

const $mainApi = axios.create({
    baseURL: MAIN_URL,
});

const $imageApi = axios.create({
    baseURL: IMAGE_URL,
});

const api = {
    $mainApi,
    $imageApi
}

for (const key in api) {
    api[key as keyof typeof api].interceptors.request.use((config) => {
        if (config.headers) {
            config.headers.Authorization =
                `Bearer ${AUTH_TOKEN}`
            config.headers.setAccept('application/json')
        }
        return config;
    })
}

export {
    $mainApi,
    $imageApi
}


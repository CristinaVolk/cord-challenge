import axios from 'axios';

export const $api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization =
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmIzZmZhMmU1MmJkNDE0MDY4ODhkMzY0MTQ4YjU1NiIsIm5iZiI6MTcxOTI0ODIwMC44Nzk3NjksInN1YiI6IjY2NzlhNGIwYTk2YmNiZjYyYmI4NTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i5qhec65CpSG2Cw3fXqcgS17Mv1BzREO5RVjOKuoEuE';
        config.headers.setAccept('application/json')
    }
    return config;
});

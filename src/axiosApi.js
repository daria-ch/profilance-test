import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://daria-ch-app.firebaseio.com/'
});

export default axiosApi;
import axios from 'axios';

const baseURL = 'https://swapi.dev/api';

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;

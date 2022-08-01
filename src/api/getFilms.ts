import axiosInstance from './config';

const filmsPath = '/films';

const getFilmsRequest = async () => axiosInstance.get(filmsPath);

export default getFilmsRequest;

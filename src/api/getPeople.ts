import axiosInstance from './config';

const peoplePath = '/people';

const getPeopleRequest = async (page:string = '1') => axiosInstance.get(`${peoplePath}?page=${page}`);

export default getPeopleRequest;

import axiosInstance from './config';

const characterPath = '/people';

const getCharacterRequest = async (id:string) => axiosInstance.get(`${characterPath}/${id}`);

export default getCharacterRequest;

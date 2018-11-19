import axios from 'axios';

export const getDocs = (version = '0.0.0') => axios.get(`${process.env.APP_URL}/meta/docs/${version}.json`);

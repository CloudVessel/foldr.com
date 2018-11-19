import axios from 'axios';

import constants from '../constant';

console.log('yoooo', process.env.APP_URL);

export const getDocs = version => axios.get(`${process.env.APP_URL}/meta/docs/${version}.json`);

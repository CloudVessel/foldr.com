import axios from 'axios';

import constants from '../constant';

console.log('yo', constants.APP_URL);

export const getDocs = version => axios.get(`${APP_URL}/meta/docs/${version}.json`);

import axios from 'axios';
import { API } from '@constants/API';

const request = axios.create({
  baseURL: API.BASE_URL,
});

request.defaults.headers.common['Accept-Language'] = 'ru';

export { request };

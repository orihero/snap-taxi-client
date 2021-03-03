import axios from 'axios';
import { API } from '@constants/API';

const request = axios.create({
  baseURL: API.BASE_URL,
});

// request.defaults.headers.common[
//   'Authorization'
// ] = `Bearer $2y$10$BNE2zemB92bX/6QvcBfZ7.PsqVM/a.WYFOR3PSSx3yf/paCL2j4t6`;

export { request };

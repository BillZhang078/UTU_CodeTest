import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  responseType: 'json',
});

export default apiInstance;

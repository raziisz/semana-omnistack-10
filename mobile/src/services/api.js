import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.16.13.15:3333',
});

export default api;
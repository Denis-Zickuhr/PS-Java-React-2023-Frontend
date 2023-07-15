import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL : 'http://localhost:8080'
});

export default api;
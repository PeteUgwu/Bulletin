import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://newsapi.org/v2/everything?q=tesla&from=2023-05-01&sortBy=publishedAt&apiKey=7d6c2de756014f95822c31c2a8de94a0',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

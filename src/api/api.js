import axios  from 'axios';

const api = axios.create({});

api.defaults.baseURL = 'https://koronapay.com/';

export const countries = () => api.get('online/api/countries');

import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

axios.defaults.baseURL = baseUrl;

axios.interceptors.request.use(config => 
{
//   config.headers['Authorization'] = store.getters["auth/getToken"];
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/json';

  return config;
});

export const HTTP = axios;
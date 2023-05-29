import axios from "axios";
import { useLoginStore } from '@/stores/loginStore';

const baseUrl = import.meta.env.VITE_BASE_URL;

axios.defaults.baseURL = baseUrl;

axios.interceptors.request.use(config => 
{
  const loginStore = useLoginStore();


  config.headers['Authorization'] = loginStore.tokenValue;
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/json';

  return config;
});

export const HTTP = axios;
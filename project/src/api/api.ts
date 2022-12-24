import axios, {AxiosRequestConfig} from 'axios';
import {getToken} from "../services/localstorage";


const baseURL = 'https://10.react.pages.academy/wtw'
export const createAPI = () => {
  const api = axios.create({
    baseURL: baseURL,
    timeout: 5000,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        if (config.headers) {
          config.headers['X-token'] = token;
        }
      }

      return config;
    },
  );

  return api;
};

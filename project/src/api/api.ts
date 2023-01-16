import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getToken} from '../services/localstorage';
import {StatusCodes} from 'http-status-codes';
import {toast} from 'react-toastify';


const baseURL = 'https://10.react.pages.academy/wtw';

const isNotAvailable = (response: AxiosResponse) =>
  response.status === StatusCodes.BAD_REQUEST ||
      response.status === StatusCodes.UNAUTHORIZED ||
      response.status === StatusCodes.NOT_FOUND;

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
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && isNotAvailable(error.response)) {
        toast.warn(error.response.data.error);
      }

      throw error;
    }
  );

  return api;
};

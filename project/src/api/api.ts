import axios from 'axios';


const baseURL = 'https://10.react.pages.academy/wtw'
const createAPI = () => axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export const api = createAPI()


import getConfig from 'next/config';
import axios from 'axios';
import {apiEndpoints} from './constants';
import { addTokenToStorage, getTokenFromStorage, isTokenExpired } from '../utils/storage';

const { API_URL } = getConfig()?.publicRuntimeConfig;

if (!API_URL) {
  throw new Error(
    'Please define the API_URL environment variable inside .env.local'
  );
}
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

const axiosTokenInitiator = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

axiosInstance.interceptors.request.use(
  async (request) => {
    const tokenInfo = await getTokenFromStorage();
    let token;
    if (isTokenExpired(tokenInfo)) {
      token = await generateToken();
    } else {
      token = tokenInfo.token;
    }
    request.headers['Auth-token'] = token;
    return request;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message;
    console.log('error in request', errMessage, originalRequest);
  }
);

const generateToken = async () => {
  try {
    const { data } = await axiosTokenInitiator.get(apiEndpoints.GENERATE_TOKEN);
    if (data.data.token) {
      const token = data.data.token;
      addTokenToStorage(token);
      return token;
    }
    throw new Error('Token not found');
  } catch (error) {
    console.log(error);
  }
};

export { axiosInstance as default, generateToken };
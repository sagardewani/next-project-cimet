import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()
import axios from 'axios';

const { API_KEY, API_URL } = serverRuntimeConfig;

if (!API_KEY) {
  throw new Error(
    'Please define the API_KEY environment variable inside .env.local'
  );
}

if (!API_URL) {
  throw new Error(
    'Please define the API_URL environment variable inside .env.local'
  );
}

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Api-key': API_KEY,
    'Content-Type': 'application/json'
  }
});


export { axiosInstance as default };
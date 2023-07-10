import axiosInstance from './base';
import {apiEndpoints} from './constants';

export const getPlans = async () => {
  try {
    const {data} = await axiosInstance.get(apiEndpoints.PLANS);
    return data.data
  } catch (error) {
    console.log(error);
  }
};
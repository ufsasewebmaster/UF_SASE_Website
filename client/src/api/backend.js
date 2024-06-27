import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'SASE_app': import.meta.env.VITE_APP_NAME },
});

export const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'SASE_app': import.meta.env.VITE_APP_NAME, 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const fetchData = async (endpoint) => {
  try {
    const response = await axiosPrivate.get(endpoint);
    if (response?.data?.payload) {
      return response.data;
    }
    throw new Error({ errCode: response?.data?.errCode, errMsg: response?.data?.errMsg });
  } catch (err) {
    throw new Error({ errCode: err?.response?.data?.errCode, errMsg: err?.response?.data?.errMsg });
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await axiosPrivate.post(endpoint, data);
    if (response?.data?.payload) {
      return response.data;
    }
    throw new Error({ errCode: response?.data?.errCode, errMsg: response?.data?.errMsg });
  } catch (err) {
    throw new Error({ errCode: err?.response?.data?.errCode, errMsg: err?.response?.data?.errMsg });
  }
};

export default axiosInstance;

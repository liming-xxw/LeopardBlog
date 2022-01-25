import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
export const BASE_URL = "http://localhost:1121/";
const Axios = axios.create({
  baseURL: BASE_URL,
});

Axios.interceptors.request.use(
  (conflg) => {
    return conflg;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    if (response.status == 200 || response.status == 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Axios;

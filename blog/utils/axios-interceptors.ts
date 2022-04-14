import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useUsers } from "../store/index";

import message from "../components/utils/message";
export const BASE_URL = "http://localhost:1121/server";
const Axios = axios.create({
  baseURL: BASE_URL,
});

Axios.interceptors.request.use(
  (conflg: AxiosRequestConfig) => {
    const useUser = useUsers();
    const token = useUser.token;
    const flag: any = conflg || {};
    if (Boolean(token)) {
      flag.headers["Authorization"] = "Bearer " + token;
      // if (!useUser.IsLogin) {
      //   console.log("ads");
      //   useUser.setIsLogn(true);
      // } else {
      //   console.log("ads");
      //   useUser.setIsLogn(false);
      // }
      // conflg.headers["Authorization"] = "Bearer" + token;
    }
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
    if (error.response.status == 401) {
      message({ type: "error", message: String(error.response.data.message) });
    }
    return Promise.reject(error.response);
  }
);

export default Axios;

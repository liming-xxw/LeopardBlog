import Axios from "./axios-interceptors";

const get = async (url: string, params?: object) => {
  return await Axios.get(url, { params: params });
};

const post = async (url: string, data?: object) => {
  return await Axios.post(url, data);
};

export { get, post };

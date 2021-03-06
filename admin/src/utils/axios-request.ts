import Axios from "./axios-interceptors";

const get = async (url: string, params?: any) => {
  return await Axios.get(url, { params: params });
};

const post = async (url: string, data?: any, headers?: any) => {
  return await Axios.post(url, data, headers);
};

export { get, post };

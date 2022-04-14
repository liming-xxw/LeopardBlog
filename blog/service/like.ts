import { get, post } from "~~/utils/axios-request";
import { likecreate, likefindone } from "./api";
export const LikeCreate = async (body: object) => {
  const { data } = await post(likecreate, body);
  return data;
};

export const FindOne = async (blog: string) => {
  const { data } = await get(`${likefindone}/${blog}`);
  return data;
};

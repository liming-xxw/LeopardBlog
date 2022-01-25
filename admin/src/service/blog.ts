import { BlogCreate, BlogDelete } from "./api";
import { get, post } from "../utils/axios-request";

const BlogList = async (params?: any) => {
  const { data } = await get(BlogCreate);
  return data;
};

const BlogCreateFuc = async (body: any): Promise<JSON> => {
  const { data } = await post(BlogCreate, body);
  return data;
};

const BlogDeleteFuc = async (id: string) => {
  const { data } = await post(`${BlogDelete}/${id}`);
  return data;
};

export { BlogCreateFuc, BlogList, BlogDeleteFuc };

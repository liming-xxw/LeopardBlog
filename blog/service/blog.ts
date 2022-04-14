import { BlogList, BlogFindId, BlogHot } from "./api";
import { get } from "../utils/axios-request";

const BlogListFuc = async (params?: object) => {
  const { data } = await get(BlogList, params);
  return data;
};

const BlogFindById = async (id: string, params?: object) => {
  const { data } = await get(`${BlogFindId}/${id}`);
  return data;
};

const BlogHotList = async (params?: object) => {
  const { data } = await get(BlogHot, params);
  return data
};

export { BlogListFuc, BlogFindById,BlogHotList };

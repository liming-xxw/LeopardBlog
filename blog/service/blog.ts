import { BlogList, BlogFindId } from "./api";
import { get } from "../utils/axios-request";

const BlogListFuc = async (params?: object) => {
  const { data } = await get(BlogList, params);
  return data;
};

const BlogFindById = async (id: string, params?: object) => {
  const { data } = await get(`${BlogFindId}/${id}`);
  return data;
};

export { BlogListFuc, BlogFindById };

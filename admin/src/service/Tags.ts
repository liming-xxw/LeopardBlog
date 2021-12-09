import { TagsList, TagsDelete, TagsUpdate, TagsCreate } from "./api";
import { get, post } from "../utils/axios-request";
const TagList = async (params?: any) => {
  const { data } = await get(TagsList, params);
  return data;
};

// const TagDelete = async (id: string) => {
//     return await post(`${TagsDelete}/${id}`);
//   };

const TagUpdate = async (body: any) => {
  const { data } = await post(TagsUpdate, body);
  return data;
};

const TagDelete = async (id: string) => {
  const { data } = await post(`${TagsDelete}/${id}`);
  return data;
};

export { TagList, TagDelete, TagUpdate };

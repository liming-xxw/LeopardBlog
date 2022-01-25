import { TagsList, TagsDelete, TagsUpdate } from "./api";
import { get, post } from "../utils/axios-request";
const TagList = async (params?: any) => {
  const { data } = await get(TagsList, params);
  return data;
};

const TagCreate = async (body: any) => {
  const { data } = await post(TagsList, body);
  return data;
};

const TagUpdate = async (body: any) => {
  const { data } = await post(TagsUpdate, body);
  return data;
};

const TagDelete = async (id: string) => {
  const { data } = await post(`${TagsDelete}/${id}`);
  return data;
};

export { TagList, TagDelete, TagUpdate, TagCreate };

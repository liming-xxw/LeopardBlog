import { TagsList } from "./api";
import { get } from "../utils/axios-request";

const BlogList = async (params?: any) => {
  return get(TagsList, params);
};

export { BlogList };

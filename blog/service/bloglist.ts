import { TaskItemList } from "./api";
import { get } from "../utils/axios-request";

const BlogList = async (params?: object) => {
  return get(TaskItemList, params);
};

export { BlogList };

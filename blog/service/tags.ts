import { TagsList } from "./api";
import { get } from "../utils/axios-request";
export const findAll = async () => {
  const query = {
    limit: 100,
    search: {
      grade: 2,
    },
  };
  const { data } = await get(TagsList, query);
  return data;
};

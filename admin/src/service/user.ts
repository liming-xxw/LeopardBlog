import { UserList } from "./api";
import { get } from "../utils/axios-request";

const UserListFuc = async (params?: any) => {
  const { data } = await get(UserList, params);
  return data;
};

export { UserListFuc };

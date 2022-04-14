import { AdminUserCreate } from "./api";
import { get, post } from "../utils/axios-request";

export const AdminUserList = async (params?: any) => {
  const { data } = await get(AdminUserCreate);
  return data;
};

// const BlogCreateFuc = async (body: any): Promise<JSON> => {
//   const { data } = await post(BlogCreate, body);
//   return data;
// };

// const BlogDeleteFuc = async (id: string) => {
//   const { data } = await post(`${BlogDelete}/${id}`);
//   return data;
// };

// const BlogUpdateFuc = async (body: any) => {
//   const { data } = await post(BlogUpdate, body);
//   return data;
// };

// export { BlogCreateFuc, BlogList, BlogDeleteFuc, BlogUpdateFuc };

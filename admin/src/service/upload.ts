import { post } from "../utils/axios-request";
import { upload } from "./api";
export const fucupload = async (file: any, headers?: any) => {
  return post(upload, file, headers);
};

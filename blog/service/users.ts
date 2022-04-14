import { post } from "../utils/axios-request";
import { UsersEmail, UsersCreate, login, finduser } from "./api";

export const Email = async (body: object) => {
  return await post(UsersEmail, body);
};

export const UserCreate = async (body: object) => {
  const { data } = await post(UsersCreate, body);
  return data;
};

export const Login = async (body: object) => {
  const { data } = await post(login, body);
  return data;
};

export const FindUser = async () => {
  const { data } = await post(finduser);
  return data;
};

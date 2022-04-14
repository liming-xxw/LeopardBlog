import { login, AdminUserFindUser } from "./api";
import { post } from "../utils/axios-request";
import Router from "../router/index";
import { message } from "ant-design-vue";
import Vuex from "../store/index";
export const Login = async (formState: any) => {
  const { data } = await post(login, formState);
  localStorage.setItem("token", data.token);
  message.success("登录成功");
  const user = await FindUser();
  const auth = {
    islogin: true,
    user: user,
  };
  Vuex.commit("authfuc", auth);
  Router.push({ path: "/" });
};

export const FindUser = async () => {
  const { data } = await post(AdminUserFindUser);
  return data;
};

// import jsCookies from "js-cookie";
// export const getToken = () => {
// //   console.log(jsCookies.get("token"));
// //   console.log(Boolean(jsCookies.get("token")));
//   return jsCookies.get("token");
// };

// export const setToken = (token: string) => {
//   return jsCookies.set("token", token, { expires: 7 });
// };

// export const removeToken = () => {
//   return jsCookies.remove("token");
// };

import { setCookie } from "h3";
import type { ServerResponse } from "http";
export const setToken = (res: ServerResponse, value: string) => {
  setCookie(res, "token", value, {
    maxAge: 15 * 24 * 60 * 60,
    path: "/",
    httpOnly: true,
  });
};

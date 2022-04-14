import { ref, Ref } from "vue";
import { defineStore } from "pinia";
// const token = useCookie<{ token: string }>("token");
interface user {
  IsLogin: Ref<boolean>;
  token: Ref<string>;
  user: any;
}

export const useUsers = defineStore("users", {
  state: (): user => ({
    IsLogin: ref<boolean>(false),
    user: {},
    token: ref<string>(""),
  }),
  actions: {
    setIsLogn(login: boolean) {
      this.IsLogin = login;
    },
    setToken(token: string) {
      this.token = token;
    },
    setUser(user: any) {
      this.user = user;
    },
  },
});

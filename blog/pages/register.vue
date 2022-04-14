<template>
  <div>
    <div
      class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="../assets/images/icon/batmanlogo.png"
            alt="Workflow"
            style="cursor: pointer"
            @click="$router.push('/')"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            欢迎加入cain博客,希望本站能够帮助到你
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              赞助本项目
            </a>
          </p>
        </div>

        <div class="cain-register-box">
          <div class="cain-register-box-list">
            <RegisterEmail @tran="success"></RegisterEmail>
            <RegisterUser @tran="usersuccess"></RegisterUser>
            <RegisterSuccess></RegisterSuccess>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import message from "../components/utils/message";
import { UserCreate } from "../service/users";
let tranx = ref<string>("-0px");

interface users {
  username: string;
  password: string;
  nickname: string;
  avatar?: string;
  email?: string;
}
const user = reactive<users>({
  username: "",
  password: "",
  nickname: "",
  email: "",
});
const success = (tranS: { tranx: string; email: string }) => {
  tranx.value = tranS.tranx;
  user.email = tranS.email;
};

const usersuccess = async (tranS: { tranx: string; user: users }) => {
  tranx.value = tranS.tranx;
  const { username, nickname, password } = tranS.user;
  user.username = username;
  user.nickname = nickname;
  user.password = password;

  if (user.nickname != "" && user.username != "" && user.password != "") {
    const data = await UserCreate(user);
    if (data.code == 200) {
      message({ type: "error", message: "注册成功" });
    } else {
      message({ type: "error", message: "注册失败,原因未知" });
    }
  } else {
    message({ type: "error", message: "异常情况,请刷新重新注册" });
  }
};
</script>

<style lang="scss" scoped>
.cain-register-box {
  height: auto;
  overflow: hidden;
  padding-bottom: 10px;

  .cain-register-box-list {
    gap: 10px;
    width: 900px;
    display: flex;
    transition: 0.2s;
    transform: translateX(v-bind(tranx));
    // transform: translateX(-898px);
  }
}
</style>

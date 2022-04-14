<template>
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
          Cain Blog
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          欢迎进入cain博客,希望本站能够帮助到你
        </p>
      </div>
      <div class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label class="sr-only">用户名账号</label>
            <input
              id="email-address"
              name="username"
              autocomplete="email"
              v-model="login.username"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="用户名账号/邮箱账号"
            />
          </div>
          <div>
            <label class="sr-only">密码</label>
            <input
              type="password"
              autocomplete="current-password"
              v-model="login.password"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="密码"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"
              >记住我
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              忘记密码?
            </a>
          </div>
        </div>

        <div>
          <button
            @click="OnLoginClick"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            登录
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LockClosedIcon } from "@heroicons/vue/solid";
import { use } from "h3";
import message from "../components/utils/message.js";
import { Login, FindUser } from "../service/users";
import { useUsers } from "../store/index";
const userStore = useUsers();
const Router = useRouter();
const token = useCookie<{ token: string }>("token");
interface Login {
  username: string;
  password: string;
}

const login = reactive<Login>({
  username: "",
  password: "",
});

const OnLoginClick = async () => {
  if (login.username == "") {
    message({ type: "info", message: "请填写账号或者邮箱" });
  } else if (login.password == "") {
    message({ type: "info", message: "请填写密码" });
  } else {
    const data = await Login(login);
    userStore.setIsLogn(true);
    token.value = { token: data.token };
    console.log(userStore.token);
    userStore.setToken(token.value.token);
    const user = await FindUser();
    userStore.setUser(user);
    Router.push("/");
  }
};
</script>
<style lang="scss">
@import "../assets/mixin.scss";
.cain-login {
  @include bg_color(rgba(249, 250, 251, 0));
  .cain-box {
    width: 550px;
    height: 400px;
    margin: 200px auto;
    @include box_shadow($box-shadow-color);
    border-top: 1px #ccc solid;
    padding: 40px 70px;
    box-sizing: border-box;
    .cain-box-header {
      width: 100%;
      h4 {
        font-weight: 800;
        font-size: 32px;
      }
      p {
      }
    }
    .cain-box-conten {
      .cain-input {
        display: inline-block;
        padding: 10px;
        i {
          svg {
            width: 30px;
            height: 30px;
          }
          float: left;
        }
        input {
          border: none;
          outline: none;
        }
      }
    }
  }
}
</style>

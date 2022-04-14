<template>
  <div class="space-y-6 cain-email">
    <div>
      <label class="block text-sm font-medium text-gray-700"
        >输入qq邮箱地址</label
      >
      <div class="mt-1 relative rounded-md shadow-sm">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <span class="text-gray-500">
            <MailIcon class="h-3 w-3" aria-hidden="true"
          /></span>
        </div>
        <input
          type="text"
          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-16 sm:text-sm border-gray-300 rounded-md"
          placeholder="输入qq邮箱地址"
          style="width: 442px"
          v-model="users.email"
        />
        <div class="absolute inset-y-0 right-0 flex items-center">
          <label for="currency" class="sr-only"></label>

          <button
            @click="timeOnclick"
            id="currency"
            style="line-height: 1.1rem !important"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {{ email.buttxt }}
          </button>
        </div>
      </div>
    </div>
    <div v-if="email.emailflag">
      <label for="price" class="block text-sm font-medium text-gray-700"
        >验证码</label
      >
      <div class="mt-1 relative rounded-md shadow-sm">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <span class="text-gray-500 sm:text-sm">
            <span class="text-gray-500">
              <LockClosedIcon class="h-3 w-3" aria-hidden="true" /></span
          ></span>
        </div>
        <input
          type="text"
          v-model="email.codetxt"
          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="请输入验证码"
        />
      </div>
    </div>

    <div>
      <button
        @click="onsubmitEmail"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <MailIcon
            class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            aria-hidden="true"
          />
        </span>
        验证
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MailIcon, LockClosedIcon } from "@heroicons/vue/solid";
import { Email } from "../../service/users";
import message from "../utils/message";
interface user {
  username: string;
  password: string;
  nickname: string;
  avatar: string;
  email: string;
}
const users = reactive<user>({
  username: "",
  password: "",
  nickname: "",
  avatar: "",
  email: "",
});

const email = reactive({
  email: "",
  code: "",
  codetxt: "",
  buttxt: "发送",
  emailflag: false,
});

const emit = defineEmits(["tran"]);

const timeOnclick = async () => {
  //  qq邮箱正则表达式
  var aqq = /^[1-9][0-9]{4,10}@qq.com$/;
  //   验证邮箱格式
  if (aqq.test(users.email)) {
    let time = 60;
    const timer = setInterval(() => {
      time--;
      email.buttxt = String(time);
      if (time <= 0) {
        clearInterval(timer);
        email.buttxt = "重新发送";
      }
    }, 1000);
    //   发送邮箱
    message({ type: "success", message: "发送成功,请检查收件箱" });
    const { data } = await Email(users);
    if (data.code == 200) {
      email.code = data.data.email;
      email.email = data.data.to;
      email.emailflag = true;
    } else {
      message({ type: "error", message: "邮件发送失败,请联系站长修复" });
    }
  } else {
    message({ type: "error", message: "邮箱验证错误" });
  }
};

const onsubmitEmail = async () => {
  if (users.email != "" && email.email === users.email) {
    if (email.code == email.codetxt) {
      console.log("成功");
      // emit("tran", "-452px");
      emit("tran", { tranx: "-452px", email: email.email });
    } else {
      message({ type: "error", message: "验证码错误" });
    }
  } else {
    message({ type: "error", message: "邮箱验证错误" });
  }
};
</script>

<style>
.cain-email {
  width: 442px;
}
</style>

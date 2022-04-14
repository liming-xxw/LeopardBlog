<template>
  <div class="space-y-6 cain-user">
    <div>
      <label class="block text-sm font-medium text-gray-700"
        >输入账号名称</label
      >
      <div class="mt-1 relative rounded-md shadow-sm">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <span class="text-gray-500">
            <UserIcon class="h-3 w-3" aria-hidden="true"
          /></span>
        </div>
        <input
          type="text"
          style="width: 442px"
          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-16 sm:text-sm border-gray-300 rounded-md"
          placeholder="请输入十位数的排列账号"
          v-model="users.username"
        />
      </div>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">输入昵称</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <span class="text-gray-500">
            <LightningBoltIcon class="h-3 w-3" aria-hidden="true"
          /></span>
        </div>
        <input
          type="text"
          style="width: 442px"
          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-16 sm:text-sm border-gray-300 rounded-md"
          placeholder="输入昵称"
          v-model="users.nickname"
        />
      </div>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">输入密码</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <span class="text-gray-500">
            <LockClosedIcon class="h-3 w-3" aria-hidden="true"
          /></span>
        </div>
        <input
          type="password"
          style="width: 442px"
          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-16 sm:text-sm border-gray-300 rounded-md"
          placeholder="输入密码"
          v-model="users.password"
        />
      </div>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">确认密码</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <span class="text-gray-500">
            <LockClosedIcon class="h-3 w-3" aria-hidden="true"
          /></span>
        </div>
        <input
          type="password"
          style="width: 442px"
          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-16 sm:text-sm border-gray-300 rounded-md"
          placeholder="确认密码"
          v-model="users.email"
        />
      </div>
    </div>

    <div>
      <button
        @click="onUserClick"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        确认
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  MailIcon,
  LockClosedIcon,
  LightningBoltIcon,
  UserIcon,
} from "@heroicons/vue/solid";
import message from "../utils/message";
interface user {
  username: string;
  password: string;
  nickname: string;
  avatar: string;
  email?: string;
}
const users = reactive<user>({
  username: "",
  password: "",
  nickname: "",
  avatar: "",
  email: "",
});

const emit = defineEmits(["tran"]);

const onUserClick = () => {
  if (users.username.length != 10) {
    message({ type: "info", message: "用户账号长度不符" });
  } else if (users.nickname == "") {
    message({ type: "info", message: "昵称不能为空" });
  } else if (users.password.length < 6) {
    message({ type: "info", message: "密码长度不符" });
  } else if (users.password != users.email) {
    message({ type: "info", message: "俩次密码不正确" });
  } else {
    delete users.email;
    emit("tran", { user: users, tranx: "-898px" });
  }
};
</script>

<style lang="scss" scoped>
.cain-user {
  width: 442px !important;
}
</style>

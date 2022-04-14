<template>
  <div>
    <div
      style="width: 442px"
      class="min-h-full flex items-center flex-col py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="">
        <span class="text-blue-600">
          <BadgeCheckIcon class="h-20 w-20" aria-hidden="true"
        /></span>
      </div>
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3sm font-extrabold text-gray-900">
            注册成功,欢迎你
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              本博客前后端都是个人开发完成，很多地方不完善，希望看到bug之后可以提交给我，会尽快修复
            </a>
          </p>
          <div class="flex justify-center mt-1">
            <button
            @click="$router.push('/login')"
              class="group flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              登录
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BadgeCheckIcon } from "@heroicons/vue/solid";
</script>

<style></style>

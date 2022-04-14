<template>
  <div class="comment_children_list flex gap-2.5">
    <img
      class="inline-block w-10 h-10 rounded-full ring-2 ring-white"
      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
    <div class="flex-auto flex flex-col gap-2">
      <div class="text-base text-sm text-gray-500">
        <div
          style="padding-right: 5px; height: 6px;float: left;margin-top: -5px;"
          class="text-lg  font-medium text-gray-900"
        >
          cain
        </div>
        测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试测试测试测h测试
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex sm:flex-row sm:flex-wrap gap-2.5 sm:mt-0 sm:space-x-6">
          <div
            class="cursor-pointer flex gap-1 items-center text-sm text-gray-500"
          >
            2022-01-23 02:23
          </div>
          <div
            class="flex cursor-pointer gap-1 items-center text-sm text-gray-500"
          >
            <ThumbUpIcon
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            1
          </div>
          <div
            class="flex gap-1 cursor-pointer items-center text-sm text-gray-500"
          >
            <ThumbDownIcon
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            1
          </div>
          <div
            class="flex gap-1 cursor-pointer items-center text-sm text-gray-500"
            @click="hfChange"
          >
            回复
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/vue/solid";
const emit = defineEmits(["hfChange"]);

const hfChange = () => {
  emit("hfChange");
};
</script>

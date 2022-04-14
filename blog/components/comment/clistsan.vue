<template>
  <div class="cain_list">
    <div class="flex gap-2.5">
      <img
        style="width: 60px; height: 60px"
        class="inline-block rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <div class="flex-auto flex flex-col gap-2">
        <h3 class="text-lg leading-6 font-medium text-gray-900">cain</h3>
        <p class="w-full text-base text-gray-500">
          Lorem ipsum dolor sit 1312321312met consect adipisicing elit.
          Possim12us m1232131agnam voluptatum cupidita12te veritatis in
          accusamus quisquam.1231232131212
        </p>
        <div class="flex-1 min-w-0">
          <div
            class="flex sm:flex-row sm:flex-wrap gap-2.5 sm:mt-0 sm:space-x-6"
          >
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
              @click="setisVible"
            >
              回复
            </div>
          </div>
        </div>
        <div class="comment_children flex flex-col gap-3">
          <CommentClistchilren @hfChange="setisVible"></CommentClistchilren>
          <CommentClistchilren @hfChange="setisVible"></CommentClistchilren>
          <CommentClistchilren @hfChange="setisVible"></CommentClistchilren>
        </div>
      </div>
    </div>
    <CommentCTxt class="mt-2" v-if="is"></CommentCTxt>
  </div>
</template>

<script setup lang="ts">
import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/vue/solid";

const emit = defineEmits(["isChange"]);
const props = defineProps({
  is: {
    type: Boolean,
    default: false,
  },
  val: {
    type: Number,
    default: -1,
  },
});

const { val, is } = toRefs(props);
const setisVible = () => {
  emit("isChange", val.value);
};
</script>

<style lang="scss" scoped>
.cain_list {
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px #daeaef solid;
}
</style>

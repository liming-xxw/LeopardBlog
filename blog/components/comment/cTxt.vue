<template>
  <div class="cain_comment flex gap-2.5">
    <img
      style="width: 50px; height: 50px"
      class="inline-block rounded-full ring-2 ring-white"
      :src="useUser.user.avatar"
      alt=""
    />
    <div style="align-items: end" class="flex-auto flex flex-col gap-2">
      <textarea
        :placeholder="txt"
        v-model="val"
        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      ></textarea>
      <button
        @click="onclick"
        class="group relative flex w-36 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        发布
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUsers } from "../../store/index";
const props = defineProps({
  txt: {
    tyoe: String,
    default: "留下你的感受",
  },
});
const useUser = useUsers();
const val = ref<string>("");
const { txt } = toRefs(props);
const emit = defineEmits(["on"]);
const onclick = () => {
  emit("on", val.value);
};
</script>

<style lang="scss" scoped>
.cain_comment {
  width: 100%;
}
</style>

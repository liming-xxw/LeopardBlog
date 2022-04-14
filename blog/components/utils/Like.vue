<template>
  <div class="like">
    <div class="like_box" @click="likeClick" :class="{ like_box_hover: vis }">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FindOne, LikeCreate } from "../../service/like";
import message from "../utils/message";
import { useUsers } from "../../store/index";
const token = useCookie<{ token: string }>("token");
const userStore = useUsers();
const props = defineProps({
  blogid: {
    type: String as any,
    default: "10",
  },
});

const { blogid } = toRefs(props);
const vis = ref<Boolean>(false);
if (token.value) {
  if (token.value.token) {
    const { data } = await useAsyncData(
      "like",
      async () => await FindOne(blogid.value)
    );
    vis.value = data.value;
  }
}
const likeClick = async () => {
  if (token.value) {
    if (token.value.token) {
      await LikeCreate({ blog: blogid.value });
      vis.value = !vis.value;
      message({ type: "success", message: "操作成功" });
    }
  } else {
    message({ type: "info", message: "非常感谢你的点赞,但是请先登录" });
  }
};
</script>

<style lang="scss" scoped>
.like {
  .like_box {
    cursor: pointer;
    display: inline-block;
    padding: 20px;
    border: 1px #ccc solid;
    border-radius: 50%;
    transition: 0.3s;
    &:hover {
      border: 1px red solid;
      svg {
        color: red;
      }
    }
    svg {
      transition: 0.3s;

      width: 50px;
      height: 50px;
      color: #ccc;
    }
  }
  .like_box_hover {
    border: 1px red solid;
    svg {
      color: red;
    }
  }
}
</style>

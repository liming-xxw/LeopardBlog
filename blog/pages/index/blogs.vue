<script setup lang="ts">
import { BlogListFuc } from "../../service/blog";
// import { useCookie ,setCookie} from 'h3'
const { data } = await useAsyncData(
  "bloglist",
  async () => await BlogListFuc(),
);
</script>

<template>
  <div class="blog">
    <div class="bloglist">
      <blog-list-template
        v-for="(item, index) in data.data"
        :key="index"
        :data="item"
      ></blog-list-template>
    </div>
    <blog-class />
  </div>
</template>

<style lang="scss" scoped>
.blog {
  padding: 20px 20px 0px 0px;
  display: flex;
  gap: 35px;
  position: relative;
  @media screen and (min-width: 100px) and (max-width: 1644px) {
    flex-direction: column-reverse;
  }
  .bloglist {
    padding: 0px 10px 10px 10px;
    flex: 0 0 66.66%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>

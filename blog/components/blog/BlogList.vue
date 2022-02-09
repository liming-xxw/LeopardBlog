<template>
  <div class="bloglist">
    <blog-list-template
      v-for="(item, index) in data.data"
      :key="index"
      :data="item"
    ></blog-list-template>
  </div>
</template>

<script lang="ts" setup>
import { BlogListFuc } from "../../service/blog";
interface List {
  id: number;
  title?: String | undefined;
  introduce: String;
  tags: String;
  date: String;
  views: String;
  links: String;
  collections: String;
  comments: String;
}

const { data } = await useAsyncData(
  "bloglist",
  async () => await BlogListFuc()
);
</script>

<style lang="scss" scoped>
.bloglist {
  padding: 0px 10px 10px 10px;
  flex: 0 0 66.66%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>

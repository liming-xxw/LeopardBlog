<template>
  <div class="BlogClass">
    <div class="BlogClassDiv rounded-lg shadow-md">
      <h4>标签分类</h4>
      <div class="flex flex-wrap justify-start BlogClassTags">
        <utils-tag v-for="(item, index) in data.data" :key="index"
          >{{ item.name }}:{{ item.num }}</utils-tag
        >
      </div>
    </div>
    <div class="BlogClassDiv rounded-lg shadow-md" style="margin-top: 30px">
      <h4>热门博客</h4>
      <div class="flex">
        <p v-for="(item, index) in hotblogs.data.value.data" :key="index">
          {{ item.title }}
        </p>
        <!-- <utils-tag v-for="(item, index) in hotblogs.data.data" :key="index">X</utils-tag> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { findAll } from "../../service/tags";
import { BlogHotList } from "../../service/blog";
const { data } = await useAsyncData("tagslist", async () => await findAll());
const hotblogs = await useAsyncData(
  "hotbloglist",
  async () => await BlogHotList()
);
</script>

<style lang="scss" scoped>
@import "../../assets/mixin.scss";

.BlogClass {
  flex: 0 0 32.22%;
  height: auto;
  .BlogClassDiv {
    padding: 20px;
    @include bg_color($background-color-dark);
    @include box_shadow($box-shadow-color);
    h4 {
      font-size: 17px;
      font-weight: 700;
      padding-bottom: 10px;
    }
    .BlogClassTags {
      gap: 10px;
    }
  }
}
</style>

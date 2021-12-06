<template>
  <div class="bloglist">
    <blog-list-template
      v-for="(data, index) in date"
      :key="index"
      :data="data"
    ></blog-list-template>
  </div>
</template>

<script lang="ts">
interface List {
  title: String;
  introduce: String;
  tags: String;
  date: String;
  views: String;
  links: String;
  collections: String;
  comments: String;
}

import { BlogList } from '../../service/bloglist'
export default {
  setup() {
    onMounted(async () => {
      const data =  await BlogList();
      console.log(data);
    });

    const date = ref<List[]>([
      {
        title: "一个基于SpringBoot+vue的学生信息管理系统详细设计1",
        introduce:
          "12 月 3 日，历史上的今天，Fortran 语言之父 John Warner Backus 出生",
        tags: "vue",
        date: "2021-12-3",
        views: "100",
        links: "100",
        collections: "100",
        comments: "100",
      },
      {
        title: "一个基于SpringBoot+vue的学生信息管理系统详细设计2",
        introduce:
          "12 月 3 日，历史上的今天，Fortran 语言之父 John Warner Backus 出生",
        tags: "nestjs",
        date: "2021-12-3",
        views: "1000",
        links: "1000",
        collections: "100",
        comments: "10000000",
      },
      {
        title: "一个基于SpringBoot+vue的学生信息管理系统详细设计3",
        introduce:
          "12 月 3 日，历史上的今天，Fortran 语言之父 John Warner Backus 出生",
        tags: "java",
        date: "2021-12-3",
        views: "100",
        links: "100",
        collections: "100",
        comments: "100",
      },
      {
        title: "一个基于SpringBoot+vue的学生信息管理系统详细设计",
        introduce:
          "12 月 3 日，历史上的今天，Fortran 语言之父 John Warner Backus 出生",
        tags: "vue",
        date: "2021-12-3",
        views: "100",
        links: "100",
        collections: "100",
        comments: "100",
      },
    ]);

    return {
      date,
    };
  },
};
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

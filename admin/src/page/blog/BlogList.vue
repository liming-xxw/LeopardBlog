<template>
  <div class="BlogList">
    <div class="">
      <div class="header">
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="6">
            <a-form-item label="搜索博客">
              <a-input-search
                v-model:value="Like.title"
                placeholder="搜索博客"
                style="width: 200px"
              />
            </a-form-item>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <a-form-item label="子分类">
              <a-select
                v-model:value="Like.tag"
                :options="options"
                style="width: 200px"
                :allowClear="true"
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <a-form-item label="Activity name">
              <a-input />
            </a-form-item>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <a-form-item label="Activity name">
              <a-input />
            </a-form-item>
          </a-col>
        </a-row>
      </div>
    </div>
    <div>
      <a-table :data-source="bloglist">
        <a-table-column key="id" title="ID" data-index="id" />

        <a-table-column
          key="title"
          title="标题"
          data-index="title"
          :width="300"
        />

        <a-table-column
          key="introduce"
          title="introduce"
          data-index="introduce"
          :width="300"
        >
          <template #default="{ text: introduce }">
            <a-tooltip>
              <template #title>
                {{ introduce }}
              </template>
              <p class="table_introduce">
                {{ introduce }}
              </p>
            </a-tooltip>
          </template>
        </a-table-column>
        <a-table-column
          key="type"
          title="所属类别"
          data-index="type"
          :width="100"
        >
          <template #default="{ text: type }">
            {{ type.name }}
          </template>
        </a-table-column>
        <a-table-column
          key="type"
          title="所属类别"
          data-index="type"
          :width="100"
        >
          <template #default="{ text: type }">
            {{ type.name }}
          </template>
        </a-table-column>
        <a-table-column
          key="cover"
          title="图片"
          data-index="cover"
          :width="100"
        >
          <template #default="{ text: cover }">
            <img :src="cover" alt="" width="50" height="50" />
          </template>
        </a-table-column>
        <a-table-column
          key="topping"
          title="置顶"
          data-index="topping"
          :width="70"
        >
          <template #default="{ text: topping }">
            <a-switch :checked="topping" />
          </template>
        </a-table-column>
        <a-table-column key="hot" title="热门" data-index="hot" :width="70">
          <template #default="{ text: hot }">
            <a-switch :checked="hot" />
          </template>
        </a-table-column>
        <a-table-column
          key="recommend"
          title="推荐"
          data-index="recommend"
          :width="70"
        >
          <template #default="{ text: recommend }">
            <a-switch :checked="recommend" />
          </template>
        </a-table-column>
        <a-table-column key="action" title="操作">
          <template #default="{ record }">
            <span>
              <router-link :to="`/blog/update/${record.id}`" tag="a"
                >编辑</router-link
              >
              <a-divider type="vertical" />
              <a @click="BlogDelete(record.id)">删除</a>
            </span>
          </template>
        </a-table-column>
      </a-table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, toRefs, watch } from "vue";
import { BlogList, BlogDeleteFuc } from "../../service/blog";
import { TagList } from "../../service/Tags";
import { Tags, option } from "../../interface/interfaceUtils";

interface blogs {
  id: number;
  title: string;
  introduce: string;
  type?: any;
  author?: any;
  cover: string;
  topping?: boolean;
  hot?: boolean;
  recommend?: boolean;
}

const bloglist = ref<blogs[]>([]);
const options = ref<option[]>();
const search = ref<string>("");
const Like = reactive<{ title?: string; tag?: string }>({});

watch(
  () => Like,
  (val) => {
    console.log(val);
    blogfetch();
  },
  {
    deep: true,
  }
);

const blogfetch = async () => {
  // Like.title === "" ? delete Like.title : Like.title;
  // search.value = "blog.title LIKE   :title";
  // const query = {
  //   search: search.value,
  //   like: Like,
  // };
  // const query = {
  //   search: search.value,
  //   like: {
  //     title: `%测试%`,
  //   },
  // };
  const query = {
    search: "blog.title LIKE:title",
    like: {
      title: "ccc",
    },
  };
  const data = await BlogList();
  bloglist.value = data.data;
  console.log(data);
};

const fetch = async () => {
  blogfetch();
  const tagslist = await TagList({
    search: {
      grade: 1,
    },
  });
  options.value = tagslist.data.map((v: Tags) => ({
    label: v.name,
    value: v.id,
    options: v.superiors?.map((a: Tags) => ({
      label: a.name,
      value: a.id,
    })),
  }));
};

const BlogDelete = async (id: string) => {
  const { data } = await BlogDeleteFuc(id);
  fetch();
};

onMounted(() => {
  fetch();
});
</script>

<style lang="scss" scoped>
.BlogList {
  background: #fff;
  height: 89vh;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  .table_introduce {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>

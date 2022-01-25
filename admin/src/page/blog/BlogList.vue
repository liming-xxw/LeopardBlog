<template>
  <div class="BlogList">
    <div class="">
      <div class="header">
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="6">
            <a-form-item label="搜索博客分类">
              <a-input-search
                placeholder="搜索博客大分类"
                style="width: 200px"
              />
            </a-form-item>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <a-form-item label="子分类">
              <a-input-search placeholder="搜索博客子分类" />
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
          :width="50"
        >
          <template #default="{ text: topping }">
            <a-switch :checked="topping" />
          </template>
        </a-table-column>
        <a-table-column key="hot" title="热门" data-index="hot" :width="50">
          <template #default="{ text: hot }">
            <a-switch :checked="hot" />
          </template>
        </a-table-column>
        <a-table-column
          key="recommend"
          title="推荐"
          data-index="recommend"
          :width="50"
        >
          <template #default="{ text: recommend }">
            <a-switch :checked="recommend" />
          </template>
        </a-table-column>
        <a-table-column key="action" title="操作">
          <template #default="{ record }">
            <span>
              <a>编辑</a>
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
import { onMounted, ref } from "vue";
import { BlogList, BlogDeleteFuc } from "../../service/blog";
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

const fetch = async () => {
  const data = await BlogList();
  bloglist.value = data.data;
};

const BlogDelete = async (id: string) => {
  const { data } = await BlogDeleteFuc(id);
  console.log(data);
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

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
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="6">
            <a-button type="primary" @click="visible = true"> 新增 </a-button>
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
          title="管理员账号"
          data-index="title"
          :width="300"
        />

        <a-table-column
          key="管理员名称"
          title="管理员名称"
          data-index="管理员名称"
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
        <a-table-column key="管理员级别" title="管理员级别" data-index="type">
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

        <a-table-column key="action" title="操作">
          <template #default="{ record }">
            <span>
              <router-link :to="`/blog/update/${record.id}`" tag="a"
                >编辑</router-link
              >
              <a-divider type="vertical" />
              <a>删除</a>
            </span>
          </template>
        </a-table-column>
      </a-table>
    </div>

    <div>
      <!-- <a-modal
        title="创建管理员"
        :visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
      >
      <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

  
      </a-modal> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { AdminUserList } from "../../service/adminuser";
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
const visible = ref<boolean>(false);

// const;

const handleOk = () => {
  visible.value = false;
};

const handleCancel = () => {
  visible.value = false;
};

const fetch = async () => {
  const data = await AdminUserList();
  bloglist.value = data.data;
};

// const BlogDelete = async (id: string) => {
//   const { data } = await BlogDeleteFuc(id);
//   console.log(data);
//   fetch();
// };

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

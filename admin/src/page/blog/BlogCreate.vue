<template>
  <div class="BlogCreate">
    <MdEditor v-model="blogvalue.content"></MdEditor>
    <div class="but-list">
      <a-button>草稿</a-button>
      <a-button type="primary" @click="visible = true">保存</a-button>
      <a-drawer
        v-model:visible="visible"
        :closable="false"
        class="custom-class"
        style="color: red"
        title="保存博客"
        placement="right"
      >
        <a-form
          :model="blogvalue"
          :label-col="{ span: 3 }"
          :wrapper-col="{ span: 23 }"
        >
          <a-form-item label="标题">
            <a-input v-model:value="blogvalue.title" />
          </a-form-item>

          <a-form-item label="介绍">
            <a-textarea
              v-model:value="blogvalue.introduce"
              show-count
              :maxlength="400"
            />
          </a-form-item>
          <a-form-item label="类型">
            <a-select
              v-model:value="blogvalue.type"
              :options="TagOption"
              @change="tagsValueOnChang"
            ></a-select>
          </a-form-item>
          <a-form-item label="标签">
            <a-select
              v-model:value="blogvalue.tags"
              mode="multiple"
              placeholder="选择文章标签"
              :options="tagsoption"
            ></a-select>
          </a-form-item>
          <a-form-item label="作者">
            <a-select
              v-model:value="blogvalue.type"
              :options="typeopion"
            ></a-select>
          </a-form-item>
          <a-form-item label="置顶" :wrapper-col="{ span: 14, offset: 0 }">
            <a-switch v-model:checked="blogvalue.topping" />
          </a-form-item>
          <a-form-item label="推荐" :wrapper-col="{ span: 14, offset: 0 }">
            <a-switch v-model:checked="blogvalue.topping" />
          </a-form-item>
          <a-form-item label="热门" :wrapper-col="{ span: 14, offset: 0 }">
            <a-switch v-model:checked="blogvalue.topping" />
          </a-form-item>
          <a-form-item label="封面" :wrapper-col="{ span: 0, offset: 2 }">
            <a-upload
              v-model:file-list="fileList"
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :before-upload="beforeUpload"
              @change="handleChange"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else>
                <loading-outlined v-if="loading"></loading-outlined>
                <plus-outlined v-else></plus-outlined>
                <div class="ant-upload-text">Upload</div>
              </div>
            </a-upload>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 0 }">
            <a-button type="primary" @click="onSubmit">保存</a-button>
            <a-button style="margin-left: 10px">取消</a-button>
          </a-form-item>
        </a-form>
      </a-drawer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MdEditor from "md-editor-v3";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons-vue";
import "md-editor-v3/lib/style.css";
import { onMounted, reactive, ref } from "vue";
import { TagList } from "../../service/Tags";
import { option, Tags } from "../../interface/interfaceUtils";

// ts
interface blogvaluets {
  title: string;
  content: string;
  htmlcontent: string;
  type: string;
  tags?: string;
  author: string;
  cover: string;
  introduce: string;
  topping: boolean;
}

const tagslist = ref<Tags[]>([]);
const TagOption = ref<option[]>([]);
const tagsoption = ref<option[]>([]);

const tagsfetch = async () => {
  const date: any = await TagList({
    search: {
      grade: "1",
    },
  });
  tagslist.value = date.data;
  TagOption.value = date.data.map((v: Tags) => ({
    value: v.id,
    label: v.name,
  }));
};

const tagsValueOnChang = (val: string) => {
  for (var i = 0; i < tagslist.value.length; i++) {
    if (tagslist.value[i].id == val) {
      const data = tagslist.value[i].superiors?.map((v: Tags) => ({
        value: v.id,
        label: v.name,
      }));
      tagsoption.value = data;
    }
  }
  delete blogvalue.tags;
};

onMounted(() => {
  tagsfetch();
});

// 控制抽屉的开关
const visible = ref<boolean>(false);
//
const typeopions = ref<option[]>([
  { label: "x", value: "x" },
  { label: "x", value: "x" },
  { label: "x", value: "x" },
]);

// from表单内容
const blogvalue = reactive<blogvaluets>({
  title: "",
  content: "",
  htmlcontent: "",
  type: "",
  author: "",
  cover: "",
  introduce: "",
  topping: false,
});
</script>

<style lang="scss">
.BlogCreate {
  display: inline-block;
  width: 100%;
  padding: 20px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -2px rgb(0 0 0 / 0.05);
  .but-list {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 20px;
  }
}

.avatar-uploader > .ant-upload {
  width: 240px;
  height: 240px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>

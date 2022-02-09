<template>
  <div class="BlogCreate">
    <MdEditor
      v-model="blogvalue.content"
      @onHtmlChanged="onHtmlChanged"
      @onUploadImg="onUploadImg"
    ></MdEditor>
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
              v-model:value="blogvalue.author"
              :options="UserOption"
            ></a-select>
          </a-form-item>
          <a-form-item label="置顶" :wrapper-col="{ span: 14, offset: 0 }">
            <a-switch v-model:checked="blogvalue.topping" />
          </a-form-item>
          <a-form-item label="推荐" :wrapper-col="{ span: 14, offset: 0 }">
            <a-switch v-model:checked="blogvalue.hot" />
          </a-form-item>
          <a-form-item label="热门" :wrapper-col="{ span: 14, offset: 0 }">
            <a-switch v-model:checked="blogvalue.recommend" />
          </a-form-item>
          <a-form-item label="封面" :wrapper-col="{ span: 0, offset: 2 }">
            <a-upload
              v-model:file-list="fileList"
              name="file"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              :action="uploadcard"
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
import { uploadcard } from "../../service/api";
import { useRoute } from "vue-router";
import MdEditor from "md-editor-v3";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons-vue";
import "md-editor-v3/lib/style.css";
import { onMounted, reactive, ref,toRefs } from "vue";
import { TagList } from "../../service/Tags";
import { fucupload } from "../../service/upload";
import { option, Tags } from "../../interface/interfaceUtils";
import { BlogCreateFuc, BlogList } from "../../service/blog";
import { Item } from "ant-design-vue/lib/menu";
import { message } from "ant-design-vue";
import { UserListFuc } from "../../service/user";
// ts
interface blogvaluets {
  title: string;
  content: string;
  htmlcontent: string;
  type: string;
  tags?: string;
  author: string;
  cover?: string;
  introduce: string;
  topping: boolean;
  hot?: boolean;
  recommend?: boolean;
}

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: {
    url: string;
  };
  url?: string;
  type?: string;
  size: number;
  originFileObj: any;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

const tagslist = ref<Tags[]>([]);
const TagOption = ref<option[]>([]);
const UserOption = ref<option[]>([]);
const tagsoption = ref<option[] | undefined>([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>("");
const fileList = ref([]);

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
}
const route = useRoute();
const routeFuc = async () => {
  const id = route.params.id;
  if (id != undefined) {
    const data = await BlogList({
      search: {
        id: id,
      },
    });
    const { title ,content,type,author,cover,introduce}  = toRefs(data.data[0])
    blogvalue.title=title
    blogvalue.content=content
    blogvalue.type=data.data[0].type?.id
    blogvalue.author=data.data[0].author?.id
    blogvalue.cover = cover
    blogvalue.introduce=introduce
    
  }
};

// 控制抽屉的开关
const visible = ref<boolean>(false);
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

const usersfetch = async () => {
  const data: any = await UserListFuc();
  UserOption.value = data.data.map((v: any) => ({
    value: v.id,
    label: v.username,
  }));
};

const tagsValueOnChang = (val: string) => {
  const data = tagslist.value.filter((item: Tags, index: number) => {
    return item.id == val;
  });
  tagsoption.value = data[0].superiors?.map((v: Tags) => ({
    value: v.id,
    label: v.name,
  }));
  delete blogvalue.tags;
};

const onUploadImg = async (
  files: FileList,
  callback: (urls: string[]) => void
) => {
  const res = await Promise.all(
    Array.from(files).map((file) => {
      return new Promise((rev, rej) => {
        const form = new FormData();
        form.append("file", file);
        fucupload(form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then((res) => rev(res))
          .catch((error) => rej(error));
      });
    })
  );
  callback(res.map((item: any) => item.data.url));
};

const onHtmlChanged = (html: string) => {
  blogvalue.htmlcontent = html;
};

const onSubmit = () => {
  BlogCreateFuc(blogvalue);
};

const beforeUpload = (file: FileItem) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const handleChange = (info: FileInfo) => {
  if (info.file.status === "uploading") {
    loading.value = true;
    return;
  }
  if (info.file.status === "done") {
    blogvalue.cover = info.file.response?.url;
    getBase64(info.file.originFileObj, (base64Url: string) => {
      imageUrl.value = base64Url;
      loading.value = false;
    });
  }
  if (info.file.status === "error") {
    loading.value = false;
    message.error("upload error");
  }
};

onMounted(() => {
  tagsfetch();
  usersfetch();
  routeFuc();
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

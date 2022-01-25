<template>
  <div class="blogId">
    <blog-image-preview
      v-model="previewlist.value"
      :imgurl="previewlist.imgurl"
    ></blog-image-preview>
    <div class="bloglist"></div>
    <div class="blog_content">
      <div class="blog_content_title">
        <h4 class="blog_data_title">
          {{ data.data.title }}
        </h4>
        <div class="blog_data_bottom">
          <div class="blog_data_bottom_left">
            <p>前端:</p>
            vue
          </div>
          <div class="blog_data_bottom_right">
            <div class="blog-list-tmplate-icon">
              <span class="icon-item">
                <span style="width: 15px; height: 15px">
                  <EyeIcon />
                </span>
                {{ data.views ? data.views : 0 }}
              </span>
              <span class="icon-item">
                <span style="width: 15px; height: 15px">
                  <ThumbUpIcon />
                </span>
                {{ data.links ? data.links : 0 }}
              </span>
              <span class="icon-item">
                <span style="width: 15px; height: 15px">
                  <FolderOpenIcon />
                </span>
                {{ data.collections ? data.collections : 0 }}
              </span>
              <span class="icon-item">
                <span style="width: 15px; height: 15px">
                  <ChatIcon />
                </span>
                {{ data.comments ? data.comments : 0 }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="md-preview"
        class="md-preview default-theme"
        ref="artContent"
        v-html="data.data.htmlcontent"
      ></div>
    </div>
    <div class="blog_catalogue">
      <div class="blog_catalogue_div">
        <div class="blog_catalogue_div_title">文章目录</div>
        <div class="blog_catalogue_div_content">
          <ol type="A">
            <li
              v-for="(item, index) in cateloguelist"
              :key="index"
              @click="scroll(`#${item.id}`)"
            >
              {{ index + 1 }}.{{ item.id }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlogFindById } from "../../service/blog";

import {
  ThumbUpIcon,
  ChatIcon,
  EyeIcon,
  FolderOpenIcon,
} from "@heroicons/vue/outline";
const { data } = await useAsyncData(
  "blogid",
  async () => await BlogFindById("4")
);

interface cateloguets {
  id: string;
  type: string;
}
interface preview {
  value: boolean;
  imgurl: string;
}

const artContent = ref<HTMLElement | null>(null);
const cateloguelist = ref<cateloguets[]>([]);
const previewlist = reactive<preview>({
  value: false,
  imgurl: "",
});
const scroll = (id: string) => {
  document.querySelector(id)?.scrollIntoView({
    behavior: "smooth", // 平滑过渡
    block: "start", // 上边框与
  });
};

const catelogue = () => {
  const vnode = artContent.value?.children;
  const dom = document.querySelectorAll("#md-preview img");
  for (let i = 0; i < dom.length; i++) {
    dom[i].onclick = () => {
      previewlist.value = true;
      previewlist.imgurl = dom[i].src;
    };
  }

  if (vnode) {
    for (let i = 0; i < vnode.length; i++) {
      const node = vnode[i];
      const reg = /^H[1-6]{1}$/;
      if (reg.exec(node.tagName)) {
        cateloguelist.value.push({
          id: node.id,
          type: node.tagName,
        });
      }
    }
  }
};

onMounted(() => {
  catelogue();
});
</script>

<style lang="scss" scoped>
@import "../../assets/mixin.scss";
.blogId {
  width: 80%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  .bloglist {
    width: 300px;
    height: 50px;
    border: 1px #daeaef solid;
  }
  .blog_catalogue {
    width: 300px;
    height: auto;
    .blog_catalogue_div {
      width: 100%;
      height: auto;
      @include bg_color($background-color-dark);
      // @include box_shadow($box-shadow-color);
      border: 1px #daeaef solid;
      .blog_catalogue_div_title {
        width: 100%;
        height: 40px;
        text-align: left;
        line-height: 40px;
        font-size: 15px;
        font-weight: 700;
        border-bottom: 1px #daeaef solid;
        padding-left: 10px;
      }
      .blog_catalogue_div_content {
        width: 100%;
        height: auto;
        padding: 5px 0px 5px 0px;

        ol {
          li {
            width: 100%;
            margin-top: 10px;
            font-size: 13px;
            cursor: pointer;
            padding-left: 10px;
            transition: 300ms;
            &:hover {
              text-indent: 10px;
              background-color: rgba(0, 0, 0, 0.1);
            }
          }
        }
      }
    }
  }
  .blog_content {
    flex: 1;
    border: 1px #daeaef solid;
    @include bg_color($background-color-dark);
    padding: 10px;
    .blog_content_title {
      width: 100%;
      height: 100px;
      border-bottom: 1px solid #daeaef;
      .blog_data_bottom {
        display: flex;
        height: 40px;
        justify-content: space-between;
        align-items: flex-end;
        .blog_data_bottom_left {
          display: flex;
          color: #9dbdc6;
          font-size: 14px;
        }
        .blog_data_bottom_right {
          .blog-list-tmplate-icon {
            display: flex;
            align-items: flex-end;
            justify-content: right;
            font-size: 12px;
            .icon-item {
              cursor: pointer;
              display: flex;
              align-content: flex-end;
              margin-left: 10px;
              color: #9dbdc6;
              &:first-child {
                margin-left: 0px !important;
              }
            }
          }
        }
      }
      .blog_data_title {
        padding: 10px 10px 10px 0px;
        font-size: 26px;
        font-weight: 700;
      }
    }
  }
}
</style>

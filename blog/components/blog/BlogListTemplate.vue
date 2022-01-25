<template>
  <nuxt-link :to="`/blogs/${data.id}`" target="_blank">
    <div class="bloglisttemplate rounded-lg shadow-md">
      <div class="blog-list-tmplate-item">
        <div class="blog-list-tmplate-item-img">
          <div
            class="rounded-lg"
            :style="{ backgroundImage: 'url(' + data.cover + ')' }"
          ></div>
        </div>
        <div class="blog-list-tmplate-item-introduce">
          <h4>{{ data.title }}</h4>
          <div class="blog-list-tmplate-item-introduce-js">
            {{ data.introduce }}
          </div>
          <div class="blog-list-tmplate-item-introduce-b">
            前端:{{ data.tags }}
            <p>{{ data.date }}</p>
          </div>
        </div>
      </div>
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
  </nuxt-link>
</template>

<script lang="ts">
import {
  ThumbUpIcon,
  ChatIcon,
  EyeIcon,
  FolderOpenIcon,
} from "@heroicons/vue/outline";
export default {
  components: {
    ThumbUpIcon,
    ChatIcon,
    FolderOpenIcon,
    EyeIcon,
  },
  props: {
    data: {
      type: Object,
      default: {
        id: "0",
        title: "数据传输失败",
        introduce:
          "12 月 3 日，历史上的今天，Fortran 语言之父 John Warner Backus 出生",
        tags: "vue",
        date: "2021-12-3",
        views: "100",
        links: "100",
        collections: "100",
        comments: "100",
      },
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixin.scss";
.bloglisttemplate {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @include bg_color($background-color-dark);
  @include box_shadow($box-shadow-color);
  @media screen and (min-width: 100px) and (max-width: 987px) {
    flex-direction: column;
    .blog-list-tmplate-item {
      flex-direction: column;
      gap: 30px;
      .blog-list-tmplate-item-img {
        width: 100% !important;

        div {
          width: 100% !important;
          background-position: center -150px !important;
        }
      }
    }
    .blog-list-tmplate-icon {
      justify-content: left !important;
    }
  }
  .blog-list-tmplate-item {
    flex: 0 0 70%;
    display: flex;
    // justify-content: space-between;
    .blog-list-tmplate-item-img {
      width: 15.125rem;
      height: 160px;
      //   background-image: url("../../assets/images/images/wh.jpg");
      //   background-size: cover;
      //   background-position: center 0;
      //   background-repeat: no-repeat;
      div {
        width: 14.125rem;
        height: 160px;
        background-size: cover;
        background-position: center 0px;
        // background-repeat: no-repeat;
      }
    }
    .blog-list-tmplate-item-introduce {
      flex: 0 0 63%;
      margin-left: 30px;
      h4 {
        display: block;
        width: 100%;
        font-weight: 700;
        font-size: 17px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .blog-list-tmplate-item-introduce-js {
        display: block;
        width: 100%;
        height: 95px;
        word-break: normal;
        font-size: 13px;
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
      }
      .blog-list-tmplate-item-introduce-b {
        width: 100%;
        height: 30px;
        display: flex;
        //   border: 1px red solid;
        font-size: 13px;
        align-items: center;
        p {
          padding-left: 10px;
          font-size: 10px;
          color: #9dbdc6;
        }
      }
    }
  }
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
</style>

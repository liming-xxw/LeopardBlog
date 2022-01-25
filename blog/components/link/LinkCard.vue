<template>
  <div class="link-card shadow-lg rounded-md">
    <div class="link-bg rounded-md"></div>
    <div class="link-tie font-semibold">博客名称:</div>
    <p class="link-introduce">网址:https://www.leopardxblog.com</p>
    <a href="https://space.bilibili.com/402922174" target="_black">
      <div class="link-but">
        <ArrowCircleRightIcon />
        <span>进入</span>
      </div>
    </a>
  </div>
</template>

<script>
import { ArrowCircleRightIcon } from "@heroicons/vue/outline";
export default {
  components: {
    ArrowCircleRightIcon,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixin.scss";
.link-card {
  width: 18.0625rem;
  height: auto;
  min-height: 200px;
  padding: 10px;
  @include bg_color($background-color-dark);
  @include box_shadow($box-shadow-color);
  @media screen and (max-width: 1920px) {
    width: 22.5625rem;
  }
  @media screen and (max-width: 1886px) {
    width: 31%;
  }
  @media screen and (max-width: 1388px) {
    width: 48%;
  }
  @media screen and (max-width: 950px) {
    width: 99%;
  }
  .link-bg {
    width: 100%;
    height: 150px;
    background-image: url("../../assets/images/images/wh.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .link-tie {
    padding-top: 10px;
  }
  .link-introduce {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 13px;
  }
  .link-but {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 15px 22px 15px 22px;
    font-size: 14px;
    border-radius: 4px;
    &:hover {
      border: 1px #0c84ff solid;
      background: #c8e0f8;
      color: #0c84ff;
    }
  }
}
</style>

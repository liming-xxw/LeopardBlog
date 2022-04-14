<template>
  <div class="BlogFBox">
    <div class="BlogFBoxHeader">
      <div class="BlogFBoxHeader_icon">
        <BookOpenIcon />
      </div>
      7
    </div>
    <div class="BlogFBoxCentent">
      <h4>博客文章</h4>
      <p>我的日常记录，平时所想、记录旅游、摄影…12313131231312</p>
    </div>
    <div class="BlogFBoxBottom">
      <button
        style="width: 100px; height: 35px"
        type="button"
        class="relative bg-blue-700 flex justify-center py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-black-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span class="">
          <ArrowNarrowRightIcon class="text-white h-5 w-5"></ArrowNarrowRightIcon>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BookOpenIcon, ArrowNarrowRightIcon } from "@heroicons/vue/outline";
</script>

<style lang="scss" scoped>
@import "../../assets/mixin.scss";
.BlogFBox {
  padding: 20px;
  position: relative;
  width: 280px;
  height: 250px;
  background: white;
  border-radius: 10px;

  @include bg_color($background-color-dark);
  @include box_shadow($box-shadow-color);
  box-sizing: border-box;
  .BlogFBoxHeader {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 34px;
    color: blue;
    font-weight: 800;
    .BlogFBoxHeader_icon {
      width: 60px;
      height: 60px;
      background: blue;
      padding: 10px;
      color: white;
      border-radius: 10px;
    }
  }
  .BlogFBoxCentent {
    h4 {
      font-weight: 800;
      padding: 5px 0px;
    }
    p {
      color: #80a8a0;
    }
  }
  .BlogFBoxBottom {
    position: absolute;
    width: 86%;
    bottom: 20px;
    display: flex;
    justify-content: right;
    box-sizing: border-box;
  }
}
</style>

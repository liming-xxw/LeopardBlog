<template>
  <div class="BlogClass">
    <div class="BlogClassDiv rounded-lg shadow-md">
      <h4>标签分类</h4>
      <div class="flex flex-wrap justify-center BlogClassTags">
        <utils-tag v-for="item in 10" :key="item">标签{{ item }}</utils-tag>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/mixin.scss";

.BlogClass {
  flex: 0 0 32.22%;
  height: auto;
  .BlogClassDiv {
    padding: 20px;
    @include bg_color($background-color-dark);
    @include box_shadow($box-shadow-color);
    h4 {
      font-size: 17px;
      font-weight: 700;
      padding-bottom: 10px;
    }
    .BlogClassTags {
      gap: 10px;
    }
  }
}
</style>

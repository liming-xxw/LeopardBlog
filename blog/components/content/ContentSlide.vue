<template>
  <div class="content-box">
    <div class="content-slide rounded-md">
      <div class="slide-items">
          <content-admin-project v-if="vis" />
          <flsh-project v-else></flsh-project>
      </div>
    </div>
    <div class="button-list">
      <div
        class="button-list-but rounded-full bg-blue-400"
        :class="{ 'button-list-but-active': vis }"
        @click="buttonOnclick(true)"
      ></div>
      <div
        class="button-list-but rounded-full bg-blue-200"
        :class="{ 'button-list-but-active': !vis }"
        @click="buttonOnclick(false)"
      ></div>
    </div>
  </div>

  <content-module-data />
</template>

<script setup lang="ts">
import FlshProject from "./FlshProject.vue";
const vis = ref<boolean>(true);
const buttonOnclick = (val: boolean) => {
  vis.value = val;
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixin.scss";
.content-box {
  position: relative;
}
.content-slide {
  @include box_shadow($box-shadow-color);
  @include bg-color($background-color-dark);
}
.button-list {
  position: absolute;
  right: 35px;
  bottom: -20px;
  display: flex;
  gap: 10px;
  width: 70px;
  .button-list-but {
    // width: 15px;
    flex: 1;
    height: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: #60a5fa;
    }
  }
  .button-list-but-active {
    flex: none;
    width: 40px;
  }
}


</style>

<template>
  <div class="cain_CList flex flex-col gap-2.5">
    <comment-clistsan
      v-for="(item, index) in 2"
      :key="index"
      :is="index == iv"
      :val="index"
      @isChange="ivChange"
    ></comment-clistsan>
  </div>
</template>
<script setup lang="ts">
const iv = ref<number>();
const ivChange = (num: number) => {
  iv.value = num;
};
</script>

<style lang="scss" scoped>
.cain_CList {
  width: 100%;

  .cain_list {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px #daeaef solid;
  }
}
</style>

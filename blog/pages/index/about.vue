<template>
  <div>
    <div
      class="cl"
      v-for="(item, index) in colors"
      :key="index"
      :style="{ background: item }"
    >
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const colors = ref([
  "#c6875c",
  "#bd827c",
  "#d9c19f",
  "#9388b3",
  "#8a9cc2",
  "#2d262d",
  "#232122",
  "#7aa297",
  "#80a8a0",

]);
</script>

<style lang="scss" scoped>
.cl {
  width: 50px;
  height: 50px;
}
</style>

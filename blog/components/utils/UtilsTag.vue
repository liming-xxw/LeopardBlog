<template>
  <div class="UtilsTag rounded-md">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.UtilsTag {
  display: inline-block;
  padding: 3px 7px 3px 7px;
  cursor: pointer;
  border: 1px #7aa297 solid;
  background-color: white;
  transition: .3s;
  &:hover {
    box-shadow: 0 0 #0000, 0 0 #0000, -0 0 #0000, 0 0 #0000,
      0 4px 10px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06);
  }
}
</style>

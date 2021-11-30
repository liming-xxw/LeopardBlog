<template>
  <div class="home">
    <sidebar />
    <div class="content transition duration-500 ease-in-out">
      <content-header />
      <NuxtChild />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  setup() {},
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  width: 100%;
  gap: 30px;
  .content{
  padding: 20px 20px 0px 0px;
    flex: 1;
  }
}
</style>

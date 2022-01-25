<template>
  <div class="home transition duration-300 ease-in-out">
    <sidebar />
    <div class="content transition duration-500 ease-in-out">
      <content-header />
      <transition name="router"> <NuxtPage /> </transition>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>
<style lang="scss">
@import "../assets/mixin.scss";
.home {
  display: flex;
  width: 100%;
  gap: 30px;
  @include bg_color(rgba(249, 250, 251, 0));
  // background: rgba(249, 250, 251, 0);
  .content {
    padding: 20px 20px 0px 0px;
    flex: 1;
  }
}

.router-enter-active,
.router-leave-active {
  transition: opacity 1s;
}

.router-enter,
.router-leave-active {
  opacity: 0;
}
</style>

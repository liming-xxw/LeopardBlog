<template>
  <div class="home transition duration-300 ease-in-out">
    <sidebar />
    <div class="content transition duration-500 ease-in-out">
      <content-header />
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUsers } from "../store/index";
import { FindUser } from "../service/users";
const token = useCookie<{ token: string }>("token");
const userStore = useUsers();
if (!userStore.token) {
  if (token.value) {
    if (token.value.token) {
      userStore.setIsLogn(Boolean(token.value.token));
      userStore.setToken(token.value.token);
      const user = await FindUser();
      userStore.setUser(user);
    }
  }
}
// const kk = useCookie<{ token: string }>("token");
</script>
<style lang="scss">
@import "../assets/mixin.scss";
.home {
  display: flex;
  width: 100%;
  gap: 30px;
  @include bg_color(rgba(249, 250, 251, 0));
  // background-color: red;
  // background: rgba(249, 250, 251, 0);
  .content {
    padding: 20px 20px 0px 0px;
    flex: 1;
  }
}
</style>

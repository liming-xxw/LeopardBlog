<template>
  <div class="cain_login">
    <a-dropdown>
      <template #overlay>
        <a-menu>
          <a-menu-item key="1">
            <UserOutlined />
            个人中心
          </a-menu-item>
          <a-menu-item key="2">
            <UserOutlined />
            设置
          </a-menu-item>
          <a-menu-item key="3" @click="exct()">
            <UserOutlined />
            退出登录
          </a-menu-item>
        </a-menu>
      </template>
      <div class="cain_login_img">
        <a-avatar
          :size="35"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        cain
      </div>
    </a-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
const router = useRouter();

const exct = () => {
  message.info("注销成功");
  router.push("/login");
};
</script>

<style lang="scss" scoped>
.cain_login {
  margin-right: 100px;
  .cain_login_img {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
  }
}
</style>

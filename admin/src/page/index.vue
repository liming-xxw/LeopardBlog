<script lang="ts" setup>
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  EditOutlined,
  VerifiedOutlined,
} from "@ant-design/icons-vue";

import { ref } from "vue";
const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);


</script>

<template>
  <div>
    <a-layout style="height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
          <a-sub-menu key="dashboard">
            <template #icon>
              <DashboardOutlined />
            </template>
            <template #title>控制台</template>
            <a-menu-item key="1-1">
              <router-link to="/"> 工作台 </router-link>
            </a-menu-item>
            <a-menu-item key="1-2">
              <router-link to="/andlysis"> 分析页 </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="2">
            <EditOutlined />
            <router-link to="/blog/create" style="margin-left: 10px">
              <span>撰写博客</span>
            </router-link>
          </a-menu-item>
          <a-sub-menu key="3">
            <template #icon>
              <DashboardOutlined />
            </template>
            <template #title>管理博客</template>
            <a-menu-item key="3-1">
              <router-link to="/blog/list"> 博客列表 </router-link>
            </a-menu-item>
            <a-menu-item key="3-2">
              <router-link to="/blog/tags"> 博客分类 </router-link>
            </a-menu-item>
            <a-menu-item key="3-3">
              <router-link to="/bloglink"> 友情链接 </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="4">
            <template #icon>
              <VerifiedOutlined />
            </template>
            <template #title>系统管理</template>
            <a-menu-item key="4-1">
              <router-link to="/adminuser/list"> 管理员列表 </router-link>
            </a-menu-item>
            <a-menu-item key="4-2">
              <router-link to="/blogclass"> 用户管理 </router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content class="a-layout-content">
          <transition name="router" mode="out-in">
            <router-view> </router-view>
          </transition>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style>
.a-layout-content {
  min-height: 850px;
  max-height: 850px;

  overflow: hidden;
  overflow-y: visible;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

.router-leave-active,
.router-enter-active {
  transition: all 0.5s;
}
.router-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.router-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.upload_link_image .ant-upload {
  width: 220px !important;
  height: 204px !important;
  margin-top: 30px !important;
}

::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.1);
}
</style>

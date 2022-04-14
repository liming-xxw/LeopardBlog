<template>
  <div>
    <a-layout style="height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <div v-for="(item, index) in MenuList" :key="'div' + index">
            <a-sub-menu v-if="item.children" :key="'sub' + index">
              <template #title>
                <span>
                  <component :is="item.icon"></component>
                  <span>{{ item.title }}</span>
                </span>
              </template>
              <a-menu-item
                v-for="itemtags in item.children"
                :key="itemtags.title"
              >
                <router-link :to="itemtags.path">
                  {{ itemtags.title }}
                </router-link>
              </a-menu-item>
            </a-sub-menu>
            <a-menu-item v-else :key="item.title">
              <router-link :to="item.path">
                <component :is="item.icon"></component>
                {{ item.title }}
              </router-link>
            </a-menu-item>
          </div>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="header">
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
          <div>
            <login />
          </div>
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

<script setup lang="ts">
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  EditOutlined,
  VerifiedOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import login from "../components/login/login.vue";
interface Menu {
  icon?: any;
  title: string;
  path?: string;
  children?: Menu[];
}

const selectedKeys = ref<string[]>(["1"]);

const collapsed = ref<boolean>(false);
const MenuList = ref<Menu[]>([
  {
    icon: DashboardOutlined,
    title: "控制台",
    children: [
      {
        title: "数据分析",
        path: "/",
      },
    ],
  },
  {
    icon: EditOutlined,
    title: "撰写博客",
    path: "/blog/create",
  },
  {
    icon: DashboardOutlined,
    title: "管理博客",
    children: [
      {
        title: "博客管理",
        path: "/blog/list",
      },
      {
        title: "标签管理",
        path: "/blog/tags",
      },
      {
        title: "友链管理",
        path: "/link/list",
      },
    ],
  },
  {
    icon: DashboardOutlined,
    title: "系统管理",
    children: [
      {
        title: "管理员管理",
        path: "/adminuser/list",
      },
      {
        title: "用户管理",
        path: "/tags",
      },
    ],
  },
]);
</script>

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

.header {
  background: #fff;
  padding: 0;
  display: flex;
  justify-content: space-between;
  
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

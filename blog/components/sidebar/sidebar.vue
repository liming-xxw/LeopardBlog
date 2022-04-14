<template>
  <div class="sidebar-Adaptation">
    <div
      class="sudebar drop-shadow-sm transition duration-500 ease-in-out"
      :class="{ tran: visible, sidebar_menu: sldebar }"
    >
      <div class="sidebar-overflow">
        <sidebar-logo :sidebarflag="sldebar" />
        <sidebar-menu :sidebarflag="sldebar" />
      </div>
      <sidebar-bottom @change="SidebarChang" />
    </div>
    <div class="sidebar_conten" :class="{ sidebar_menu: sldebar }"></div>
    <div
      class="sidebar_but bg-white rounded-md"
      :style="{ 'margin-left': sidebar_but_tran + 'rem' }"
      @click="VisibleClick"
    >
      <ViewListIcon />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ViewListIcon } from "@heroicons/vue/outline";

const visible = ref<boolean>(false);
const sidebar_but_tran = ref<number>(0);
const sldebar = ref<boolean>(false);
const VisibleClick = () => {
  visible.value = !visible.value;
  sidebar_but_tran.value == 0
    ? (sidebar_but_tran.value = 16.625)
    : (sidebar_but_tran.value = 0);
};

const SidebarChang = (val: boolean) => {
  sldebar.value = val;
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixin.scss";

.sidebar-Adaptation {
  @media screen and (min-width: 100px) and (max-width: 1200px) {
    .sudebar {
      transform: translateX(-100%);
    }
    .sidebar_conten {
      display: none;
    }
    .sidebar_but {
      transform: translate(0%, -50%);
    }
  }
}

.tran {
  transform: translateX(0%) !important;
}
.sidebar_but {
  position: fixed;
  width: 35px;
  height: 35px;
  top: 50%;

  transform: translate(-100%, -50%);
  z-index: 2;
  cursor: pointer;
  transition: 500ms;
}
.sidebar_but_focus {
  margin-left: 16.625rem;
}
.sidebar_but_no_focus {
  margin-left: -16.625rem;
}

.sidebar_conten {
  width: 16.625rem;
  height: 100vh;
  transition: 300ms;
}
.sidebar_menu {
  width: 6.25rem !important;
}
.sudebar {
  width: 16.625rem;
  // width: 10rem;
  height: 100vh;
  position: fixed;
  z-index: 1;
  transition: 300ms;
  @include bg_color($background-color-dark);
  @include box_shadow($box-shadow-color);
  .sidebar-overflow {
    height: 80vh;
    overflow: hidden;
    overflow-y: visible;
  }
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

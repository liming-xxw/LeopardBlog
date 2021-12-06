<template>
  <div class="sidebarmenu">
    <p v-show="!sidebarflag">菜单</p>
    <div class="sidebarmenulist">
      <div
        v-for="(item, index) in menulist"
        :key="index"
        class="sidebarmenutags"
      >
        <nuxt-link
          class="sidebarmenulink"
          :to="item.url"
          :class="{ sidebarmenutagshover: item.url == fullpath }"
        >
          <HomeIcon class="menu-icon" v-if="item.icon == 'HomeIcon'" />
          <BookOpenIcon
            class="menu-icon"
            v-else-if="item.icon == 'BookOpenIcon'"
          />
          <UserGroupIcon
            class="menu-icon"
            v-else-if="item.icon == 'UserGroupIcon'"
          />
          <ShareIcon class="menu-icon" v-else-if="item.icon == 'ShareIcon'" />
          <PaperAirplaneIcon
            class="menu-icon"
            v-else-if="item.icon == 'PaperAirplaneIcon'"
          />
          <p v-show="!sidebarflag" style="padding-right: 80px">
            {{ item.title }}
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  HomeIcon,
  BookOpenIcon,
  UserGroupIcon,
  ShareIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/outline";
interface menu {
  icon: String;
  title: String;
  url: String;
}

export default {
  components: {
    HomeIcon,
    BookOpenIcon,
    UserGroupIcon,
    ShareIcon,
    PaperAirplaneIcon,
  },
  props: {
    sidebarflag: {
      type: Boolean,
    },
  },
  setup() {
    const router = useRouter();
    const menulist = ref<menu[]>([
      { icon: "HomeIcon", title: "首页", url: "/" },
      { icon: "BookOpenIcon", title: "文章", url: "/blogs" },
      { icon: "UserGroupIcon", title: "论坛", url: "/forums" },
      { icon: "ShareIcon", title: "友链", url: "/links" },
      { icon: "PaperAirplaneIcon", title: "关于", url: "/about" },
    ]);
    return {
      menulist,
      fullpath: router.currentRoute.value.fullPath,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebarmenu {
  padding: 0px 50px 32px 32px;
  p {
    font-size: 15px;
    color: #9dbdc6;
  }
  .sidebarmenulist {
    display: inline-block;
    .sidebarmenutags {
      .sidebarmenulink {
        display: inline-block;
        height: 37px;
        display: flex;
        gap: 20px;
        margin-top: 30px;
        padding: 5px;
        align-items: center;
        // border: 1px red solid;
        cursor: pointer;
        border-radius: 20px;
        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }
        p {
          white-space: nowrap;
        }
        .menu-icon {
          width: 25px;
          height: 25px;
        }
      }
    }
    .sidebarmenutagshover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>

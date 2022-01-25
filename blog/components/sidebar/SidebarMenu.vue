<template>
  <div class="sidebarmenu">
    <p v-show="!sidebarflag" style="color: #7aa297">菜单</p>
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
          <div v-if="item.icon == 'HomeIcon'" class="item-icon-div">
            <HomeIcon class="menu-icon" />
          </div>
          <div v-else-if="item.icon == 'BookOpenIcon'" class="item-icon-div">
            <BookOpenIcon class="menu-icon" />
          </div>
          <div v-else-if="item.icon == 'FilmIcon'" class="item-icon-div">
            <FilmIcon class="menu-icon" />
          </div>
          <div v-else-if="item.icon == 'UserGroupIcon'" class="item-icon-div">
            <UserGroupIcon class="menu-icon" />
          </div>
          <div v-else-if="item.icon == 'ShareIcon'" class="item-icon-div">
            <ShareIcon class="menu-icon" />
          </div>

          <div
            v-else-if="item.icon == 'PaperAirplaneIcon'"
            class="item-icon-div"
          >
            <PaperAirplaneIcon class="menu-icon" />
          </div>
          <span v-show="!sidebarflag" style="padding-right: 80px">
            {{ item.title }}
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import // HomeIcon,

"@heroicons/vue/outline";

import {
  HomeIcon,
  BookOpenIcon,
  UserGroupIcon,
  ShareIcon,
  PaperAirplaneIcon,
  FilmIcon,
} from "@heroicons/vue/solid";
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
    FilmIcon,
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
      { icon: "FilmIcon", title: "视频", url: "/videos" },
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
@import "../../assets/mixin.scss";
.sidebarmenu {
  padding: 0px 50px 32px 32px;
  p {
    font-size: 15px;
    // color: #9dbdc6;
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
        font-size: 15px;
        color: #9dbdc6;
        &:hover {
          // background-color: rgba(0, 0, 0, 0.2);
        }
        span {
          white-space: nowrap;
        }
        .item-icon-div {
          display: inline-block;
          position: relative;
          padding: 4px;
          border-radius: 10px;
          color: #9dbdc6;
          transition: 300ms;
          // background: rgba(0, 0, 0, .1);
          background: #f4f4f5;
        }
        .menu-icon {
          width: 20px;
          height: 20px;
        }
      }
    }
    .sidebarmenutagshover {
      // background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
// .router-link-active {
//   color: #2d262d !important;
// }
.router-link-exact-active {
  // color: #2d262d !important;
  @include font_color($font-color-232122);
  .item-icon-div {
    background: #c6875c !important;
    color: white !important;
  }
}
</style>

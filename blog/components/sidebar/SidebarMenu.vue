<template>
  <div class="sidebarmenu">
    <p>菜单</p>
    <div class="sidebarmenulist">
      <div v-for="(item, index) in menulist" :key="index" class="sidebarmenutags">
        <HomeIcon  class="menu-icon" v-if="item.icon == 'HomeIcon'" />
        <BookOpenIcon class="menu-icon"  v-else-if="item.icon == 'BookOpenIcon'" />
        <UserGroupIcon class="menu-icon"  v-else-if="item.icon == 'UserGroupIcon'" />
        <ShareIcon class="menu-icon"  v-else-if="item.icon == 'ShareIcon'" />
        <PaperAirplaneIcon  class="menu-icon"  v-else-if="item.icon == 'PaperAirplaneIcon'" />
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { HomeIcon,BookOpenIcon,UserGroupIcon,ShareIcon,PaperAirplaneIcon } from "@heroicons/vue/outline";
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
    PaperAirplaneIcon
  },
  setup() {
    const menulist = ref<menu[]>([
      { icon: "HomeIcon", title: "首页", url: "/" },
      { icon: "BookOpenIcon", title: "文章", url: "/" },
      { icon: "UserGroupIcon", title: "论坛", url: "/" },
      { icon: "ShareIcon", title: "友链", url: "/" },
      { icon: "PaperAirplaneIcon", title: "关于", url: "/" },
    ]);
    return {
      menulist,
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
  .sidebarmenulist{
      .sidebarmenutags{
          display: flex;
          gap: 20px;
          margin-top: 30px;
          padding: 5px;
          border: 1px red solid;
          cursor: pointer;
          border-radius: 20px;
         .menu-icon{
             width: 25px;
             height: 25px;
         }
      }
  }
}
</style>

<template>
  <div class="SidebarLogo">
    <img src="../../assets/images/icon/batmanlogo.png" alt="" />
    <div v-show="!sidebarflag">
      <h2>LeopardBlog博客</h2>
      <span class="contact_information">
        <p>QQ:&nbsp;&nbsp;3111345436</p>
        <p>WeChat:&nbsp;&nbsp;yikeyikech</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sidebarflag: {
      type: Boolean,
    },
  },
  setup(props) {},
};
</script>

<style lang="scss" scoped>
.SidebarLogo {
  width: 13.125rem;
  padding: 32px 0px 32px 32px;
  img {
    width: 124px;
    height: 49px;
    // transform: scale(0.7);
    // margin-left: -1.5625rem;
  }
  h2 {
    padding-top: 5px;
    font-weight: 700;
    font-size: 20px;
  }
  .contact_information {
    font-size: 14px;
    color: #9dbdc6;
  }
}
</style>

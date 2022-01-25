<template>
  <div class="leopard-admin-project">
    <div class="project-describe">
      <p class="leopard-admin-peoject-title">
        vue3+nestjs(nodejs)+ant-design-vue@3.0 <br />
        实现博客后台管理
      </p>
      <p class="leopard-admin-peoject-modular">
        权限管理<br />
        用户管理<br />
        文章管理<br />
        评论管理<br />
        论坛管理<br />
      </p>

      <p class="leopard-admin-project-introduce">
        如果你对这个项目感兴趣,欢迎下载源码,如果可以最好是可以给一个start,对于想跟这视频来制作的同学,点击下面的跳转b站按钮,
      </p>

      <div class="leopard-admin-project-but-list">
        <div>
          <div class="github">github</div>
        </div>
        <div>
          <div class="bilibili">访问b站</div>
        </div>
        <div>
          <div class="link">查看博客</div>
        </div>
      </div>
    </div>
    <div class="project-image-item" style="padding: 10px; width: 40%">
      <div class="project-image"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/mixin.scss";
.leopard-admin-project {
  @media screen and (min-width: 100px) and (max-width: 1200px) {
    flex-direction: column-reverse;
    .project-describe {
      width: 100% !important;
    }
    .project-image-item {
      width: 100% !important;
      height: 300px !important;
    }
  }
}

.leopard-admin-project {
  min-height: 500px;
  display: flex;
  justify-content: space-between;
  .project-describe {
    width: 60%;
    padding: 30px 30px 30px 20px;
    .leopard-admin-peoject-title {
      font-size: 30px;
      font-weight: 700;
      @include font_color($font-color-232122);
    }
    .leopard-admin-peoject-modular {
      padding-top: 20px;
      padding-left: 20px;
      font-size: 18px;
      color: #9dbdc6;
    }
    .leopard-admin-project-introduce {
      width: 100%;
      padding-top: 20px;
      font-size: 14px;
      word-break: hyphenate;
      line-height: 30px;
      @include font_color($font-color-232122);
    }
    .leopard-admin-project-but-list {
      margin-top: 40px;
      width: 300px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      .github {
        padding: 10px 25px 10px 25px;
        border: 1px #272f32 solid;
        display: inline-block;
        border-radius: 50px;
        cursor: pointer;
        font-weight: 700;
        font-size: 13px;
      }
      .bilibili {
        padding: 10px 25px 10px 25px;
        border: 1px #272f32 solid;
        display: inline-block;
        border-radius: 50px;
        cursor: pointer;
        font-weight: 700;
        font-size: 13px;
      }
      .link {
        font-size: 13px;
        cursor: pointer;
        @include font_color($font-color-232122);
      }
    }
  }
  .project-image {
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url("../../assets/images/images/wh.jpg");
    background-size: cover;
    background-position: center 0;
    background-repeat: no-repeat;
  }
}
</style>

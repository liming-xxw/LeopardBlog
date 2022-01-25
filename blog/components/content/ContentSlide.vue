<template>
  <div class="content-box">
    <div class="content-slide rounded-md">
      <div class="slide-items">
        <content-admin-project />
        <div></div>
      </div>
    </div>
    <div class="button-list">
      <div
        class="button-list-but rounded-full button-list-but-active duration-500 ease-in-out bg-blue-400"
      ></div>
      <div class="button-list-but rounded-full duration-500 ease-in-out"></div>
    </div>
  </div>

  <content-module-data />
</template>

<style lang="scss" scoped>
@import "../../assets/mixin.scss";
.content-box {
  position: relative;
}
.content-slide {
  @include box_shadow($box-shadow-color);
  @include bg-color($background-color-dark);
}
.button-list {
  position: absolute;
  right: 35px;
  bottom: -20px;
  display: flex;
  gap: 10px;
  width: 70px;
  .button-list-but {
    // width: 15px;
    flex: 1;
    height: 10px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);
    &:hover {
      background-color: #9dbdc6;
    }
  }
  .button-list-but-active {
    flex: none;
    width: 40px;
    &:hover {
      background-color: red;
    }
  }
}
</style>

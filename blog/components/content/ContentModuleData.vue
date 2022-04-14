<template>
  <div class="ContentModule">
    <div class="ModuleTags">
      <h4 class="ModuleTags-title">模块数据</h4>
      <div class="ModuleTags-visit">
        <h4>11291</h4>
        <p>总访问量</p>
      </div>
      <div class="ModuleTags-visit">
        <h4>25</h4>
        <p>今日访问量</p>
      </div>
    </div>
    <div class="flex flex-1 justify-between">
      <blog-f-box></blog-f-box>
      <blog-f-box></blog-f-box>
      <blog-f-box></blog-f-box>
      <blog-f-box></blog-f-box>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ContentModule {
  width: 100%;
  margin-top: 30px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  .ModuleTags {
    flex: 0 0 24%;
    // width: 370px;
    height: 250px;
    .ModuleTags-title {
      font-weight: 700;
      font-size: 23px;
    }
    .ModuleTags-visit {
      padding-top: 10px;
      h4 {
        font-weight: 700;
        font-size: 40px;
      }
      p {
        color: #3b3948;
        font-size: 15px;
        padding-bottom: 20px;
      }
    }
  }
}
</style>

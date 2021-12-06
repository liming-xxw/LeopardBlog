<template>
  <div class="blog">
    <blog-list />
    <blog-class />
  </div>
</template>

<style lang="scss" scoped>
.blog {
  padding: 20px 20px 0px 0px;
  display: flex;
  gap: 35px;
  position: relative;
  @media screen and (min-width: 100px) and (max-width: 1644px) {
    flex-direction: column-reverse;
  }
}
</style>

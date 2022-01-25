<template>
  <transition name="preview">
    <div class="blogPreview" @click="handok" v-show="modelValue">
      <div class="mask"></div>
      <div class="blogimg">
        <img :src="imgurl" alt="" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  imgurl: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);
const { imgurl, modelValue } = toRefs(props);

const handok = () => {
  emit("update:modelValue", false);
};
</script>

<style lang="scss" scoped>
.blogPreview {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  .mask {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .blogimg {
    width: 60%;
    height: 50%;
    z-index: 1;
  }
}

.preview-leave-active,
.preview-enter-active {
  transition: all 0.5s;
}
.preview-enter-from {
  opacity: 0;
}
.preview-leave-to {
  opacity: 0;
}
</style>

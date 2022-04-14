<template>
  <transition
    name="message"
    @before-leave="onClose()"
    @after-leave="$emit('destroy')"
  >
    <div
      :class="[
        'cain-message',
        'cain-message-' + type,
        center ? 'is-center' : '',
      ]"
      :style="{ top: offset + 'px' }"
      v-show="visible"
      @mousemove="Vmove"
      @mouseout="Vout"
    >
      <!-- <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#icon-${type}`"></use>
      </svg> -->
      <!-- <component :is="BadgeCheckIcon"></component> -->
      <span class="text-gray-500 sm:text-sm" v-if="type == 'error'">
        <span class="text-red-500">
          <BackspaceIcon class="h-5 w-5" aria-hidden="true" /></span
      ></span>
      <span class="text-gray-500 sm:text-sm" v-if="type == 'success'">
        <span class="text-green-500">
          <BadgeCheckIcon class="h-5 w-5" aria-hidden="true" /></span
      ></span>
      <span class="text-gray-500 sm:text-sm" v-if="type == 'info'">
        <span class="text-blue-500">
          <ExclamationCircleIcon class="h-5 w-5" aria-hidden="true" /></span
      ></span>
      <span v-if="message"> {{ message }}</span>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import {
  BadgeCheckIcon,
  BackspaceIcon,
  ExclamationCircleIcon,
} from "@heroicons/vue/solid";
const props = defineProps({
  id: { type: [String, Number], default: "" },
  message: { type: String, default: "" },
  type: { type: String, default: "" },
  duration: { type: Number, default: 3000 },
  center: { type: String, default: "" },
  onClose: { type: Function },
  offset: { type: Number, default: 20 },
});
const { type, duration, center, onClose, offset } = toRefs(props);
let visible = ref(false);
let time = null;
const startTimer = () => {
  time = setTimeout(() => {
    visible.value = false;
  }, duration.value);
};

const iconfuc = () => {
  if (type == "error") {
    return BackspaceIcon;
  }
};

const Vmove = () => {
  clearInterval(time);
  time = null;
};
const Vout = () => {
  startTimer();
};

onMounted(() => {
  startTimer();
  visible.value = true;
});
onUnmounted(() => {
  clearTimeout(time);
});
</script>

<style lang="scss" scoped>
.cain-message {
  display: inline-block;
  padding: 10px 16px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  span {
    font-size: 14px;
    float: left;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    padding-right: 5px;
  }
}
.message-leave-active,
.message-enter-active {
  transition: 0.3s;
}

.message-enter-from,
.message-leave-to {
  margin-top: -20px;
  opacity: 0;
}
</style>

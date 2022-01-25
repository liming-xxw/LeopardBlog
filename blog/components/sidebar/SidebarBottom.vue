<template>
  <div class="sidebarbottom">
    <div class="theme_but">
      <Switch
        v-model="enabled"
        :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
        class="relative inline-flex flex-shrink-0 h-[1.5rem] w-[3.75rem] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-0'"
          class="pointer-events-none inline-block h-[1.25rem] w-[1.25rem] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
        />
      </Switch>
      <p v-show="!sldebar">深色模式</p>
    </div>
    <div class="sidebar_but" @click="SldebarClick">
      <MenuAlt1Icon class="buticon" />
    </div>
  </div>
</template>

<script lang="ts">
import { MenuAlt1Icon } from "@heroicons/vue/outline";
import { Switch } from "@headlessui/vue";
export default {
  components: {
    MenuAlt1Icon,
    Switch,
  },
  setup(props, ctx) {
    const enabled = ref(false);
    const sldebar = ref<boolean>(false);

    watch(
      () => enabled.value,
      (val) => {
        val
          ? window.document.documentElement.setAttribute("data-theme", "theme1")
          : window.document.documentElement.setAttribute("data-theme", "");
      }
    );

    const SldebarClick = () => {
      sldebar.value = !sldebar.value;
      ctx.emit("change", sldebar.value);
    };
    return { enabled, sldebar, SldebarClick };
  },
};
</script>

<style lang="scss" scoped>
.sidebarbottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 6.25rem;
  .theme_but {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    gap: 10px;
  }
  .sidebar_but {
    width: 100%;
    height: 50%;
    border-top: 1px #daeaef solid;
    display: flex;
    justify-content: center;
    align-items: center;

    .buticon {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
}
</style>

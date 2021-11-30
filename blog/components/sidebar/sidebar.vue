<template>
  <div class="sudebar drop-shadow-sm bg-white">
    <div class="sidebar-overflow">
      <sidebar-logo />
      <sidebar-menu />
    </div>
    <sidebar-bottom />
  </div>
  <div class="sidebar_conten"></div>
</template>


<script>
export default {
    name:"sidebar"
}
</script>

<style lang="scss" scoped>
.sidebar_conten {
  width: 16.625rem;
  height: 100vh;
}
.sudebar {
  width: 16.625rem;
  height: 100vh;
  position: fixed;
  .sidebar-overflow {
    height: 80vh;
    overflow: hidden;
    overflow-y: visible;
  }
}

::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.1);
}
</style>

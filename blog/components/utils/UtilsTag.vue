<template>
    <div class="UtilsTag rounded-md">
        <slot />
    </div>
</template>

<script lang="ts">
export default {
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>
.UtilsTag{
    display: inline-block;
    padding: 3px 7px 3px 7px;
    border: 1px red solid;
    
}
</style>




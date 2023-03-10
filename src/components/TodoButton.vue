<script setup>

</script>
<template>
    <button>
        <slot>default name of button</slot>
    </button>
        <!-- // the "slot" tag is used to define a placeholder in a component where
         content can be inserted. It allows for dynamic content insertion and 
         is especially useful when creating reusable components that need to be flexible. -->
    
</template>



<style lang="scss" scoped>
  button {
    padding: 8px 16px;
    border: none;
  }
</style>
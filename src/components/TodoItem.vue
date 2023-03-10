<script setup>
import { defineProps } from "vue";

// Passing Props todo from TodosView to TodoItem: declare props by using  Array syntax
//does not giving much info on the specific prop that is defined within the component
// const props = defineProps(["todo"])
// or
// const {todo} = defineProps(["todo"])


// Passing Props todo from TodosView to TodoItem: declare props by using Object syntax
const props = defineProps({
    todo:{
        type: Object,
        required: true
    }
})

</script>

<template>
    <div>
<h1>Todo Item </h1>
    </div>
</template>



<style lang="scss" scoped>

</style>
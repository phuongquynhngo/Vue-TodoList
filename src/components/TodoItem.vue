<script setup>
import { defineProps } from "vue";

// Passing Props todo from TodosView to TodoItem: declare props by using  Array syntax
//does not giving much info on the specific prop that is defined within the component
// const props = defineProps(["todo"])
// or
// const {todo} = defineProps(["todo"])

// Passing Props todo from TodosView to TodoItem: declare props by using Object syntax
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li>
    <!-- //toggling todo from completed to not completed -->
    <!-- checked attribute: The checked attribute is an HTML attribute that is used
     to indicate whether a checkbox or radio button is checked or not. When the checked
      attribute is present on a checkbox or radio button element and its value is set to 
      "checked", the box is checked by default.  -->
      <!-- checked attribute: here sync to value " isCompleted" of the prop "todo" 
      which come from todoList (check TodosView)-->
    <input type="checkbox" :checked="todo.isCompleted"/>
  </li>
</template>

<style lang="scss" scoped></style>

<script setup>
// import { ref, reactive} from 'vue';
import { ref, defineEmits} from 'vue';

const emit = defineEmits(["create-todo"])

// to reactive the variable by using 1 of 2 methods: ref or reactive method
const todo = ref("");
// console.log(todo.value);

// const todoState = reactive({
// todo: "Testing reactive"
// });
// console.log(todoState.todo);



const createTodo =()=>{
 emit("create-todo", todo.value)
};
</script>

<template>
    <div class="input-wrap">
    <input type="text" v-model="todo">
    <!-- <input type="text" v-model="todoState.todo"> -->
    <button @click="createTodo">Create</button>
    </div>
    <!-- <p>{{ todo }}</p> -->
    <!-- <p>{{ todoState.todo }}</p> -->
</template>




<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;
  &:focus-within {
    box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
      0 -2px 4px -2px rgb(0 0 0 / 0.1);
  }
  input {
    width: 100%;
    padding: 8px 6px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  button {
    padding: 8px 16px;
    border: none;
  }
}
</style>
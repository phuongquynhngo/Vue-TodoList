<script setup>
// import { ref, reactive} from 'vue';
// import { defineEmits, reactive} from 'vue';
import { reactive} from 'vue';
// `defineEmits` is a compiler macro and no longer needs to be imported.
//Emit Custom Events:  send data and trigger actions between components. send data from child component to parents component 

import TodoButton from "./TodoButton.vue"


const emit = defineEmits(["create-todo"])

// to reactive the variable by using 1 of 2 methods: ref or reactive method
// const todo = ref("");

// console.log(todo.value);

// const todoState = reactive({
// todo: "Testing reactive"
// });
// console.log(todoState.todo);



const todoState = reactive({
  todo: "",
  invalid: false,
  errMsg: "",
});
const createTodo = () => {
    todoState.invalid = false;
  if (todoState.todo !== "") {
    emit("create-todo", todoState.todo);
    todoState.todo = "";
    return;
  }
  todoState.invalid = true;
  todoState.errMsg = "Todo value cannot be empty!";
};


</script>

<template>
    <div class="input-wrap" :class="{ 'input-err': todoState.invalid }">
    <input type="text" v-model="todoState.todo">
    <!-- <input type="text" v-model="todoState.todo"> -->
    <TodoButton @click="createTodo">Create</TodoButton>
    
    </div>
    <p class="err-msg" v-show="todoState.invalid">{{ todoState.errMsg }}</p>
    <!-- error message is toggled often: using v-show, else using v-if -->
    <!-- <p>{{ todo }}</p> -->
    <!-- <p>{{ todoState.todo }}</p> -->
</template>




<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &.input-err {
    border-color: red;
  }


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

}
.err-msg {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: red;
}
</style>
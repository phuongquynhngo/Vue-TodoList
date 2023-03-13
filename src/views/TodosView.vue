<script setup>
import { uid } from "uid";
import { ref, watch } from "vue";
import { Icon } from "@iconify/vue";
import TodoCreator from "../components/TodoCreator.vue";
import TodoItem from "../components/TodoItem.vue";

const todoList = ref([]);


//listen for change on reactive data "todoList" , invoke a callback function in which we
// run the function setTodoListLocalStorage each time todoList array is updated 
//  { deep: true }: option for watch property: track changes deep within this todoList array
watch(
  todoList,
  () => {
    setTodoListLocalStorage();
  },
  { deep: true }
);

//function to retrieve the items from local storage when we refresh the application
const fetchTodoList = () => {
  //get a referance to the item  inside the local storage od todoList
  const savedTodoList = JSON.parse(localStorage.getItem("todoList"));

  // if check: check if value saveTodoList truthy/ not equal null ( we have item todoList inside the local storage)
  //             then pass the value from local storage to todoList array
  if (savedTodoList) {
    todoList.value = savedTodoList;
  }
};

// Fetch Todo's on page load
//execute the fetchTodoList function each time we refresh the application
fetchTodoList();

//reuseable function to save todoList array to localstorage
// and execute this function each time todo is created or this is an update to a todo
// setItem method: set an item to local storage.
//                 2 params: key (name of the item that we set to local storage) and value (todoList array) must be string
const setTodoListLocalStorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList.value));
};

const createTodo = (todo) => {
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted: false,
    isEditing: null,
  });
  //setTodoListLocalStorage();
};

//  toggle Todo Complete: update the "isCompleted" property to the opposite value whenever
//  input type="checkbox' is toggled -->
// todoPos: Position of the specific todo
const toggleTodoComplete = (todoPos) => {
  todoList.value[todoPos].isCompleted = !todoList.value[todoPos].isCompleted;
  // console.log(todoList.value[todoPos].isCompleted, todoPos)
  //setTodoListLocalStorage();
};

// change the value of  "isEditing" property to the opposite value
const toggleEditTodo = (todoPos) => {
  todoList.value[todoPos].isEditing = !todoList.value[todoPos].isEditing;
  // console.log(todoList.value[todoPos].isEditing, todoPos)
  //setTodoListLocalStorage();
};

//update the value of todo to the update value
const updateTodo = (todoVal, todoPos) => {
  todoList.value[todoPos].todo = todoVal;
  //setTodoListLocalStorage();
};

// remove the current todo by filter methode
// filter all the todos with the id not equal to the id of the todo we want to remove
const deleteTodo = (todoId) => {
  todoList.value = todoList.value.filter((todo) => todo.id !== todoId);
  //setTodoListLocalStorage();
};
</script>

<template>
  <main>
    <h1>Create Todo</h1>
    <TodoCreator @create-todo="createTodo" />
    <ul class="todo-list" v-if="todoList.length > 0">
      <!-- Emit event: toggle-complete => run the function toggleTodoComplete-->
      <TodoItem
        v-for="(todo, index) in todoList"
        :todo="todo"
        :index="index"
        @toggle-complete="toggleTodoComplete"
        @edit-todo="toggleEditTodo"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </ul>
    <p v-else class="todos-msg">
      <Icon icon="noto-v1:sad-but-relieved-face" />
      <span>You have no todo's to complete! Add one!</span>
    </p>
    <!-- <p>{{ todoList }}</p> -->
  </main>
</template>
<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;
  h1 {
    margin-bottom: 16px;
    text-align: center;
  }
  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
  }
  .todos-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
}
</style>

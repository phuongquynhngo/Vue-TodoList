<script setup>
import { defineProps } from "vue";
import { Icon } from "@iconify/vue";

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
    default: () => {},
  },
  index: {
    type: Number,
    required: true,
    default: 0,
  },
});

defineEmits(["toggle-complete", "edit-todo", "update-todo", "delete-todo"]);


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
    <!-- inline Emit: Emit the index of todo to the parent View: TodosView.vue-->
    <input
      type="checkbox"
      :checked="todo.isCompleted"
      @input="$emit('toggle-complete', index)"
    />

    <div class="todo">
      <!-- <input type="text">: type into this input to edit or update todo 
    sync the value of this input with value of the value of its specific todo
    inline Emit: listen for the chang of input by using input-event-listener 
                 and emit Event with some values (value of this actual input $event.target.value and index of the current todo )
                 to to the parent View: TodosView.vue 
                 in TodosView.vue: run a function to update the value of todo when the event is emitted.
     -->
      <input
        v-if="todo.isEditing"
        type="text"
        :value="todo.todo"
        @input="$emit('update-todo', $event.target.value, index)"
      />

      <!-- span tag: output the value of todo 
      :class="{ 'completed-todo': todo.isCompleted } : v-bind class completed-todo when todo.isCompleted  has the value true-->
      <span v-else :class="{ 'completed-todo': todo.isCompleted }">{{
        todo.todo
      }}</span>
    </div>

    <!-- https://icon-sets.iconify.design/ 
     @click="$emit('edit-todo', index)": listen to event "click": emit "edit-todo" to the parent View: TodosView.vue
    -->

    <div class="todo-action">
      <Icon
        v-if="todo.isEditing"
        icon="ph:check-circle"
        class="icon"
        color="#41b080"
        width="22"
        @click="$emit('edit-todo', index)"
      />
      <Icon
        v-else
        icon="ph:pencil-fill"
        class="icon"
        color="#41b080"
        width="22"
        @click="$emit('edit-todo', index)"
      />

      <!--  
     @click="$emit('delete-todo', todo.id )": listen to event "click": emit event delete-todo and 
     send the specific id of todo to the parent View: TodosView.vue
    -->
      <Icon
        icon="ph:trash"
        class="icon"
        color="#f95e5e"
        width="22"
        @click="$emit('delete-todo', todo.id)"
      />
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 10px;
  background-color: #f1f1f1;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  &:hover {
    .todo-actions {
      opacity: 1;
    }
  }
  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    &:checked {
      background-color: #41b080;
    }
  }
  .todo {
    flex: 1;
    .completed-todo {
      text-decoration: line-through;
    }
    input[type="text"] {
      width: 100%;
      padding: 2px 6px;
      border: 2px solid #41b080;
    }
  }
  .todo-actions {
    display: flex;
    gap: 6px;
    opacity: 0;
    transition: 150ms ease-in-out;
    .icon {
      cursor: pointer;
    }
  }
}
</style>

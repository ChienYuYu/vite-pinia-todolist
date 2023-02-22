<script setup>
import { ref } from "vue";
import { useTodoStore } from "./stores/myTodo";
const todoStore = useTodoStore();
const inputTodo = ref("");

function addTodo() {
  todoStore.todoList.push({
    id: new Date().getTime(),
    content: inputTodo.value,
    complete: false,
  });
  inputTodo.value = "";
  localStorage.setItem("myTodo", JSON.stringify(todoStore.todoList));
}
</script>

<template>
  <h1 class="title">Vite Pinia todoList</h1>
  <div class="wrap">
    <div class="input-area">
      <input type="text" v-model="inputTodo" @keyup.enter="addTodo" />
      <button @click="addTodo">新增</button>
    </div>
    <ul class="todo-list">
      <li v-for="item in todoStore.todoList" :key="item.id">
        <input
          type="checkbox"
          :checked="item.complete"
          @change="todoStore.changeStatus(item.id)"
        />
        <span>{{ item.content }}</span>
        <a href="#" @click.prevent="todoStore.deleteTodo(item.id)">X</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
h1 {
  padding: 2rem 0;
  text-align: center;
}

.wrap {
  div.input-area {
    display: flex;
    justify-content: center;
    margin: 0 auto 1rem;
  }
  ul.todo-list {
    width: 500px;
    margin: 0 auto;
    padding-left: 0;
    @media (max-width: 500px) {
      width: 90%;
    }
    li {
      border-bottom: 1px solid #fa0;
      list-style: none;
      padding: 1rem;
      display: flex;
      input[type="checkbox"] {
        &:checked ~ span {
          text-decoration: line-through #f77;
        }
      }
      justify-content: space-around;
      a {
        text-decoration: none;
        color: #f77;
      }
    }
  }
}
</style>

import { ref, onMounted } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("myTodo", () => {
  const todoList = ref([]);

  function changeStatus(id) {
    console.log("changeStatus@@@@");
    const index = todoList.value.findIndex((item) => item.id === id);
    todoList.value[index].complete = !todoList.value[index].complete;
    localStorage.setItem("myTodo", JSON.stringify(todoList.value));
  }

  function deleteTodo(id) {
    todoList.value = todoList.value.filter((item) => item.id !== id);
    localStorage.setItem("myTodo", JSON.stringify(todoList.value));
  }

  onMounted(() => {
    if (!localStorage.getItem("myTodo")) {
      localStorage.setItem("myTodo", "[]");
    }
    todoList.value = JSON.parse(localStorage.getItem("myTodo"));
  });

  return { todoList, changeStatus, deleteTodo };
});

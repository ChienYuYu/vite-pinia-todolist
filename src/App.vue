<script setup></script>

<template>
  <h1 class="title">Vite Pinia todoList</h1>
  <div class="wrap">
    <div class="input-area">
      <input type="text" />
      <button>新增</button>
    </div>
    <ul class="todo-list">
      <li>
        <input type="checkbox" />
        <span>aaaaaaa</span>
        <a href="#">X</a>
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
    li {
      border-bottom: 1px solid #fa0;
      list-style: none;
      padding: 1rem;
      display: flex;
      justify-content: space-around;
      a {
        text-decoration: none;
        color: #f77;
      }
    }
  }
}
</style>

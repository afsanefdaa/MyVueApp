<template>
  <div class="app">
    <Layout>
      <TodoList />
    </Layout>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import Layout from './components/Layout';

export default {
  name: 'App',
  components: { TodoList, Layout },
};
</script>

<style>
  .app {
    font-family: 'Quicksand', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>

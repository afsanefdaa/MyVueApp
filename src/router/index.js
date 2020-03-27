import Vue from 'vue';
import Router from 'vue-router';
import TodoList from './../components/TodoList';
import About from './../components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});

// eslint-disable no-param-reassign
import TodoItem from './TodoItem';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  data() {
    return {
      newValue: '',
      generateId: 3,
      beforeEditCache: '',
      filter: 'all',
      todos: [
        {
          id: 1,
          title: 'Go to Google',
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: 'Start to write my book',
          completed: false,
          editing: false,
        },
        {
          id: 3,
          title: 'Experience a lot of new challenges upcoming',
          completed: false,
          editing: false,
        },
        {
          id: 4,
          title: 'Learn vuejs',
          completed: false,
          editing: false,
        },
        {
          id: 5,
          title: 'Learn Rxjs',
          completed: false,
          editing: false,
        },
      ],
    };
  },
  computed: {
    remaining() {
      return this.todos.filter(el => !el.completed).length;
    },
    anyRemaining() {
      return this.remaining !== 0;
    },
    todosFiltered() {
      switch (this.filter) {
        case 'all':
          return this.todos;
        case 'active':
          return this.todos.filter(el => !el.completed);
        case 'completed':
          return this.todos.filter(el => el.completed);
        default:
          return this.todos;
      }
    },
    showClearCompletedButton() {
      return this.todos.filter(el => el.completed).length > 0;
    },
  },
  methods: {
    addNewTodo() {
      if (!this.newValue.trim()) {
        return;
      }
      this.todos.push({
        id: this.generateId,
        title: this.newValue,
        completed: false,
      });
      this.newValue = '';
      this.generateId = this.generateId + 1;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    checkAllTodos() {
      this.todos.forEach(el => el.completed = event.target.checked);
    },
    clearCompleted() {
      this.todos = this.todos.filter(el => !el.completed);
    },
    finishedEdit(data) {
      this.todos.splice(data.index, 1, data.todo);
    },
  },
};

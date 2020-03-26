<template>
  <div class="main">
    <a-input
      class="input"
      placeholder="What needs to be done?"
      v-model="newValue"
      @keyup.enter="addNewTodo"
    />
    <transition-group
      name="fade"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
      class="body"
    >
      <div v-for="(item, index) in todosFiltered" :key="item.id " class="todo-item">
        <div class="todo">
          <a-checkbox
            v-model="item.completed"
          />
          <div class="todo-item-input">
          <span
            v-if="!item.editing"
            class="todo-item-label"
            :class="{ completed : item.completed}"
          >
            {{item.title}}
          </span>
            <a-input
              v-else
              type="text"
              v-model="item.title"
              v-focus
              class="item-edit-input"
            />
          </div>
        </div>
        <div class="actions">
          <a-icon class="icons" type="delete" v-if="!item.editing" @click="removeTodo(index)"/>
          <a-icon class="icons" type="edit" v-if="!item.editing" @click.once="editTodo(item)" />
          <a-icon class="icons" type="check" v-if="item.editing" @click="doneEditing(item)"/>
          <a-icon class="icons" type="close" v-if="item.editing" @click="cancelEditing(item)"/>
        </div>
      </div>
    </transition-group>
    <div class="remaining">
      <div>
        <a-checkbox :checked="!anyRemaining" @change="checkAllTodos"/>
        <label class="check-all-label">
          Check all
        </label>
      </div>
      <p class="remaining-count"><span>{{ remaining }}</span>  items left</p>
    </div>

    <div class="remaining">
      <div>
        <a-button
          size="small"
          class="filter-button"
          :class="{active: filter === 'all'}"
          @click="filter='all'"
        >
          All
        </a-button>
        <a-button
          size="small"
          class="filter-button"
          :class="{active: filter === 'active'}"
          @click="filter='active'"
        >
          Active
        </a-button>
        <a-button
          size="small"
          class="filter-button"
          :class="{active: filter === 'completed'}"
          @click="filter='completed'"
        >
          Completed
        </a-button>
      </div>
      <transition
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutDown"
      >
        <a-button
          size="small"
          class="filter-button"
          v-if="showClearCompletedButton"
          @click="clearCompleted"
        >
          Clear Completed
        </a-button>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
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
          completed: true,
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
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
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
    editTodo(item) {
      // eslint-disable-next-line no-param-reassign
      item.editing = true;
      this.beforeEditCache = item.title;
    },
    doneEditing(item) {
      if (!item.title.trim()) {
        // eslint-disable-next-line no-param-reassign
        item.title = this.beforeEditCache;
      }
      // eslint-disable-next-line no-param-reassign
      item.editing = false;
    },
    cancelEditing(item) {
      // eslint-disable-next-line no-param-reassign
      item.editing = false;
      // eslint-disable-next-line no-param-reassign
      item.title = this.beforeEditCache;
    },
    checkAllTodos() {
      // eslint-disable-next-line no-param-reassign,no-return-assign
      this.todos.forEach(el => el.completed = event.target.checked);
    },
    clearCompleted() {
      this.todos = this.todos.filter(el => !el.completed);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "./TodoList.scss";
  @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
</style>

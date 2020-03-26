<template>
  <div class="main">
    <a-input
      class="input"
      placeholder="What needs to be done?"
      v-model="newValue"
      @keyup.enter="addNewTodo"
    />
    <div v-for="(item, index) in todos" :key="item.id " class="todo-item">
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

    <div class="remaining">
      <div>
        <a-checkbox />
        <label class="check-all-label">
          Check all
        </label>
      </div>
      <p class="remaining-count"><span>{{ remaining }}</span> items left</p>
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .main {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  .input {
    width: 100%;
    margin-bottom: 20px;
  }
  .todo-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    align-items: center;
  }
  .todo {
    flex: 3;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .actions {
    display: flex;
    align-items: center;
    width: 100%;
    flex: 1;
    justify-content: flex-end;
  }
  .todo-item-label {
    font-size: 15px;
    padding: 0 10px;
    color: #35495d;
    font-weight: 500;
  }
  .todo-item-input {
    width: 100%;
  }
  .completed {
    text-decoration: line-through;
    color: #42b983;
  }
  .icons {
    font-size: 16px;
    padding: 0 5px;
    cursor: pointer;
  }
  .icons :hover {
    color: #42b983;
  }
  .item-edit-input {
    margin: 0 0 0 10px;
    padding: 0;
    border-top: unset;
    border-left: unset;
    border-right: unset;
    border-bottom: 1px solid #42b983;
    border-radius: 0;
    font-size: 15px;
    color: #35495d;
    font-weight: 500;
  }
  .item-edit-input :focus, ::selection {
    border: unset !important;
  }
  .remaining {
    border-top: 1px solid #dad8d8;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
  .check-all-label {
    padding: 0 10px;
    color: #35495d;
    font-weight: 500;
    font-size: 12px;
  }
  .remaining-count {
    color: #35495d;
    font-weight: 500;
    font-size: 12px;
    margin: 0;
  }
  .remaining-count span {
    color: #42b983;
    font-weight: bold;
  }
  /*.ant-input :hover {*/
  /*  border-color: #42b983 !important;*/
  /*}*/
</style>

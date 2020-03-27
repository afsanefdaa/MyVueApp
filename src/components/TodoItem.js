// eslint-disable no-param-reassign no-unused-expressions
export default {
  name: 'TodoItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    checkAll: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    // watches for props change
    checkAll() {
      this.completed = this.checkAll ? true : this.item.completed;
    },
  },
  data() {
    return {
      id: this.item.id,
      title: this.item.title,
      completed: this.item.completed,
      editing: this.item.editing,
      beforeEditCache: '',
    };
  },
  methods: {
    removeTodo(index) {
      this.$emit('removedItem', index);
    },
    editTodo() {
      this.editing = true;
      this.beforeEditCache = this.title;
    },
    doneEditing() {
      if (!this.title.trim()) {
        this.title = this.beforeEditCache;
      }
      this.editing = false;
      this.$emit('finishedEdit', {
        index: this.index,
        todo: {
          id: this.id,
          title: this.title,
          completed: this.completed,
          editing: this.editing,
        },
      });
    },
    cancelEditing() {
      this.editing = false;
      this.title = this.beforeEditCache;
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};

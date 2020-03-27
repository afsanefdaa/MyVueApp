<template>
  <div class="todo-item">
    <div class="todo">
      <a-checkbox
        v-model="completed"
        @change="doneEditing"
      />
      <div class="todo-item-input">
        <span
            v-if="!editing"
            class="todo-item-label"
            :class="{ completed :  completed }"
          >
            {{ title}}
          </span>
        <a-input
          v-else
          type="text"
          v-model="title"
          v-focus
          class="item-edit-input"
        />
      </div>
    </div>
    <div class="actions">
      <a-icon class="icons" type="delete" v-if="!editing" @click="removeTodo(index)"/>
      <a-icon class="icons" type="edit" v-if="!editing" @click.once="editTodo" />
      <a-icon class="icons" type="check" v-if="editing" @click="doneEditing"/>
      <a-icon class="icons" type="close" v-if="editing" @click="cancelEditing"/>
    </div>
  </div>
</template>

<script src="./TodoItem.js"></script>
<style scoped lang="scss"  src="./TodoItem.scss"/>

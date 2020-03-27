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
      <todo-item
        v-for="(item, index) in todosFiltered"
        :key="item.id "
        :item="item"
        :index="index"
        :checkAll="!anyRemaining"
        @removedItem="removeTodo"
        @finishedEdit="finishedEdit"
      />
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

<script src="./TodoList.js"></script>
<style scoped lang="scss" src="./TodoList.scss"/>
<style scoped lang="css">
  @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
</style>

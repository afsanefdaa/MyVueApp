<template>
  <Container>
      <a-layout>
        <a-layout-header class="header">
          <img src="./../assets/logo.png" class="logo">
          <span class="title">To do list with Vuejs</span>
        </a-layout-header>
        <a-layout-content><slot /></a-layout-content>
      </a-layout>
  </Container>
</template>

<style scoped lang="scss">
  @import "./Layout.scss";
</style>
<script>
import Container from './Container';

export default {
  name: 'Layout',
  components: { Container },
};
</script>

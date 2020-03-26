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

<style>
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
  .title {
    font-size: 18px;
    font-weight: 600;
    color: #35495d;
  }
  .logo {
    width: 70px;
  }
  .footer{
    background: #42b983;
    width: 100%;
    display: flex;
    padding: 5px 0;
    align-content: center;
    justify-items: center;
    color: #35495d;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
  }
</style>
<script>
import Container from './Container';

export default {
  name: 'Layout',
  components: { Container },
};
</script>

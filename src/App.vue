<template>
  <van-button type="primary">Hello Vue 3.0 + Vite</van-button>
</template>

<script>
  import {Button} from 'vant'

  export default {
    name: 'App',
    components: {
      [Button.name]: Button
    }
  }
</script>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

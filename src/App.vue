<template>
  <div id="app">
    <router-view/>
    <div class="footer">
      <router-link to="/">首页</router-link>
      <router-link to="/fair">市集</router-link>
      <router-link to="/collect">收藏</router-link>
      <router-link to="/mail">信箱</router-link>
      <router-link to="/me">我</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.footer {
  height: 3rem;
  position: fixed;
  bottom: 0;
}
.footer a {
  font-size: 2rem;
  padding: 1em;
}
</style>

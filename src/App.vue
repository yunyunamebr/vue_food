
<template>
  <div id="app">
    <Slogon/>
    <router-view/>   
    <FooterNav/>
  </div>
</template>

<script>

import Slogon from './components/Common/Slogon.vue';
import FooterNav from './components/Common/FooterNav.vue';
export default {
  name: 'app',
  components:{
    Slogon,
    FooterNav
  }
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
</style>

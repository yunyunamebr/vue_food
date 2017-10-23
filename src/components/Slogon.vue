<template>
  <div>
    <div class="header">
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
       title:'每个页面都不一样哦'
    }
    
  }
}
</script>

<style>

.header{
  background-color: #ffeecc;
  height: 150px;
}
h1{
  margin: 0;
  padding: 40px;
}
</style>

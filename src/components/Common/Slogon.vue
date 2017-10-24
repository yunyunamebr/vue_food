<template>
    <div class="header">
      <h1>{{title}}</h1>
      <img src="../../assets/img/demo.jpeg" class='avatar'/>
    </div>
</template>

<script>
export default {
  data(){
    return{
       title:''
    }
  }
}
</script>

<style>

.header{
  background-color: #ffeecc;
  height: 7.5rem;
  width: 100%;
  position: fixed;top:0;
  z-index: 3;
}
h1{
  margin: 0;
  padding: 40px;
}
.avatar{
  height: 5rem;
  position: absolute;top:1rem;left: 1rem;
  border-radius: 50%;
}
</style>

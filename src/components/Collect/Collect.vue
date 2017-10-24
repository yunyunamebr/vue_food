<template>
  <div class="hello animated flash container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '收藏！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin-top:7.5rem;
}
h1, h2 {
  font-weight: normal;
}

</style>

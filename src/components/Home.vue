<template>
  <div class="search-input">
    <el-input v-model="input" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      input:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.search-input{
  height: 200px;
  width:50%;
}
</style>

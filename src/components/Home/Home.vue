<template>
  <div class="container">
    <!-- <el-input  v-model="input" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input> -->
    <el-carousel  :interval="5000" type="card" height="20rem">
      <el-carousel-item v-for="item in 3" :key="item">
     
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<script>
export default {
  name: 'Home',
  data () {
    return {
      input:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin-top:7.5rem;
}
  .search-input{
    width:50%;
  }
  el-input {
    height: 2rem ;
    font-size:2rem;
  }
  .el-input--prefix .el-input__inner{
    height: 200px;
    background-color: #000000;
  }

    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-image:url(../../assets/img/demo.jpeg);
     background-color:#EDF2FC;
     background-repeat: no-repeat;
     background-size: 20rem;
     background-position: center;

  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-image: url(../../assets/img/logo.png);
     background-color: #EDF2FC;
     background-repeat: no-repeat;
     background-size: 20rem;
     background-position: center;
     

  }
</style>
<style type="text/css">
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>

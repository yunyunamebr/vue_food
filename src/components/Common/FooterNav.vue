
<template>
  <div>
    <div class="footer">
      <router-link to="/" class="nav-bottom"><i class="el-icon-delete"></i>首页</router-link>
      <router-link to="/fair" class="nav-bottom"><i class="el-icon-goods"></i>菜谱</router-link>
      <router-link to="/collect" class="nav-bottom"><i class="el-icon-star-off"></i>收藏</router-link>
      <router-link to="/mail" class="nav-bottom"><i class="el-icon-message"></i>信箱</router-link>
      <router-link to="/me" class="nav-bottom"><i class="el-icon-more"></i>我</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 7rem;
  position: fixed;
  bottom: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;

}
.footer a {
  font-size: 2rem;
  text-decoration: none;
  padding: 0.5em;
}
.footer a:hover, a::selection {
  border-color: red;
  opacity: 1;
}
.footer a:visited {
  color:inherit
}
i{
  font-size: 3rem;
}
.nav-bottom{
  display: flex;
  flex-direction: column;
  opacity:0.6;
}
</style>

<template>
  <div class="container">
    <div class="fair-icon-container">
    <div class="fair-icon-desp">
    <svg class="icon" aria-hidden="true">
      <use class="fair-icon-food" xlink:href="#icon-mbefengge-buding"></use>
    </svg>
       <span>好吃的布丁</span>
    </div>

    <div class="fair-icon-desp">
    <svg class="icon" aria-hidden="true">
      <use class="fair-icon-food" xlink:href="#icon-mbefengge-pisa"></use>
    </svg>
    <span>好吃的披萨</span>
    </div>

    <div class="fair-icon-desp">
    <svg class="icon" aria-hidden="true">
      <use class="fair-icon-food" xlink:href="#icon-mbefengge-yidalimian"></use>
    </svg>
    <span>好吃的意大利面</span>
    </div>

    <div class="fair-icon-desp">
    <svg class="icon" aria-hidden="true">
      <use class="fair-icon-food" xlink:href="#icon-mbefengge_nongtang"></use>
    </svg>
    <span>好喝的咖啡</span>
    </div>

    <div class="fair-icon-desp">
    <svg class="icon" aria-hidden="true">
      <use class="fair-icon-food" xlink:href="#icon-mbefengge-niuba"></use>
    </svg>
    <span>好吃的牛扒</span>
    </div>

    <div class="fair-icon-desp">
        <svg class="icon" aria-hidden="true">
          <use class="fair-icon-food" xlink:href="#icon-mbefengge_mianbao"></use>
        </svg>
        <span>好吃的面包</span>
    </div>

    <div class="fair-icon-desp">
        <svg class="icon" aria-hidden="true">
          <use class="fair-icon-food" xlink:href="#icon-mbefengge_hanbao"></use>
        </svg>
        <span>好吃的汉堡</span>
    </div>

    <div class="fair-icon-desp">
        <svg class="icon" aria-hidden="true">
          <use class="fair-icon-food" xlink:href="#icon-mbefengge_pijiu"></use>
        </svg>
        <span>好喝的啤酒</span>
    </div>
    </div>
    
    <!-- TODO：解决v-for生成列表 -->
    <div class="fair-list-container">
      <p class="fair-font-title">
        第一道菜
      </p>
      <p class="fair-font-subtitle">好吃</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'test',
      fairList:[
        {
          title:"这是第一道菜",
          sub_title:"真的好吃",
          dis_img:""

        },{
          title:"这是第二道菜",
          sub_title:"真的好吃",
          dis_img:""
      }]   
    }
  }
}
</script>
<script src="../../assets/fonts/iconfont/iconfont.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style type="text/css" scoped>
  .container{
    margin-top:7.5rem;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size: 6rem;
    margin:0 2rem;

  }
  .fair-icon-container{
    height: 10rem;
    margin-bottom: 0rem;
    border-bottom:solid 1px #D8DCE1;
    padding: 1rem 1rem 7rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

  }
  span{
    font-size:1.5rem;
  }
  .fair-icon-desp{
    display: flex;
    flex-direction: column;
  }
  .fair-icon-food{
    width:2rem;
  }
  .fair-list-container{
    margin: 2rem;
    height: 20rem;
    background-color: rgba(255,255,0,0.3);
    background-image: /* linear-gradient(to bottom left,#FC3,rgba(255,255,255,0)), */url(../../assets/img/fair_0.jpg);
    background-size:20rem;
    background-position: center;
    background-repeat:no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }
  .fair-font-title{
    font-size: 4rem;
    margin-bottom: 1rem;
    color:#000;
  }
  .fair-font-subtitle{
    font-size: 3rem;
    color:#000;
    margin-top: 1rem;
  }
</style>
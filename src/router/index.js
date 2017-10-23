import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Fair from '@/components/Fair/Fair'
import Collect from '@/components/Collect/Collect'
import Mail from '@/components/Mail/Mail'
import Me from '@/components/Me/Me'

Vue.use(Router)

export default new Router({
  routes: [
  	{ //首页
  	  path: '/',
      name: 'Home',
      component: Home
  	},
    { //市集
      path: '/fair',
      name: 'Fair',
      component: Fair
    },
    { //收藏
      path: '/collect',
      name: 'Collect',
      component: Collect
    },
    { //信箱
      path: '/mail',
      name: 'Mail',
      component: Mail
    },
    { //我
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})

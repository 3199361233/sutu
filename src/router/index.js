import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/components/page/home'
import upload from '@/components/page/upload'
import lookpic from '@/components/page/lookpic'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
    	path:'/upload',
    	name:'upload',
    	component:upload
    },
    {
      path:'/lookpic/:id',
      name:'lookpic',
      component:lookpic
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GetData from '@/components/GetData'
import PersonM from '@/components/PersonM'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/data',
      name: 'GetData',
      component: GetData
    },
    {
      path: '/person',
      name: 'PersonM',
      component: PersonM
    }
  ],
  mode:'history',

})

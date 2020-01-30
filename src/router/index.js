import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/index',
      name: 'Main',
      component: (resolve) => require(['../components/view/index.vue'],resolve)
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
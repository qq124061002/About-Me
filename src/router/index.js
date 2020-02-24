import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: '/MyPage/',
  routes: [
    {
        path: '/index',
        name: 'Main',
        component: (resolve) => require(['../components/view/index.vue'],resolve)
    },
    {
        path: '/pushBox',
        name: 'pushBox',
        component: (resolve) => require(['../components/view/pushBox.vue'],resolve)
    },
    {
        path:'*',
        redirect:'/index'
    }
  ]
})
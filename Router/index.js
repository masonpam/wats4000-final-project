import Vue from 'vue'
import Router from 'vue-router'
import YesorNo from '@/components/YesorNo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'YesorNo',
      component: YesorNo
    },
  ]
})
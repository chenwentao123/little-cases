import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import Test1 from '@/components/test1'
import Test2 from '@/components/test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/test',
      component: Test,
      children: [
        {
          path: 'test1',
          component: Test1
        }, {
          path: 'test2',
          component: Test2
        }
      ]
    }
  ]
})

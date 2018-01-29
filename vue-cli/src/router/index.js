import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import Test1 from '@/components/test1'
import Test2 from '@/components/test2'
import TestUrl from '@/components/TestUrl'

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
          name: 'test1',
          component: Test1
        }, {
          path: 'test2',
          name: 'test2',
          component: Test2
        }
      ]
    }, {
      path: '/testUrl/:userId(\\d+)/:username',
      name: 'TestUrl',
      component: TestUrl
    }, {
      path: '/home/:userId(\\d+)/:username',
      redirect: '/testUrl/:userId(\\d+)/:username'
    }, {
      path: '/test/test1',
      componenet: Test1,
      alias: '/abc'
    }
  ]
})

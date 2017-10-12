import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import ArticleList from '@/components/ArticleList'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: 'article/:id',
          name: 'ArticleDetail',
          component: ArticleDetail,
          props: true
        }
      ]
    }
  ]
})

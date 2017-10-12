import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import ArticleList from '@/components/ArticleList'
import ArticleDetail from '@/components/ArticleDetail'
import ArticleUser from '@/components/ArticleUser'
import Register from '@/components/Register'
import Login from '@/components/Login'

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
      component: Home,
      children: [
        {
          path: '',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: 'article/mine',
          name: 'ArticleUser',
          component: ArticleUser
        },
        {
          path: 'article/:id',
          name: 'ArticleDetail',
          component: ArticleDetail,
          props: true
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        }
      ]
    }
  ]
})

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Query',
    name: 'Query',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Query.vue'),
    props: {
      name: '나는 라우트에서 직접전송',
      data: 'props의 객체로 전송',
      num: '00000'
    }
    // props: (route) => ({
    //   name: route.query.name,
    //   data: route.query.data,
    //   num: route.query.num
    // })
  },
  {
    path: '/Params/:name/:data/:num',
    name: 'Params',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Params.vue'),
    props: true
    // props: { components의 이름대로...: 이름 } // 이름이 있는 뷰는 각각 정의 가능
  },
  {
    path: '/pe',
    name: 'pe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/PropsEmit.vue')
    // props: true
    // props: { components의 이름대로...: 이름 } // 이름이 있는 뷰는 각각 정의 가능
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

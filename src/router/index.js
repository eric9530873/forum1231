import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Restaurant from '../views/RestaurantsMain.vue'
import SignIn from '../views/SignIn.vue'
import store from '../store'

Vue.use(VueRouter)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('not-found')
    return
  }
  next()
}

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp')
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurant
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-top',
    component: () => import('../views/RestaurantsTop')
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/RestaurantModal')
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'restaurant-dashboard',
    component: () => import('../views/RestaurantDashboard')
  },

  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop')
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/UserMain')
  },
  {
    path: '/users/:id/edit',
    name: 'user-edit',
    component: () => import('../views/UserEdit')
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants'
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurants-new',
    component: () => import('../views/AdminRestaurantNew'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach(async (to, from, next) => {
  //???localstorage??????token

  const token = localStorage.getItem('token')
  const tokeninstore = store.state.token

  let isAuthenticated = store.state.isAuthenticated

  //???token??????store???token????????????
  if (token && token !== tokeninstore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  //???????????????
  const pathsWithoutAuthentication = ['sign-in', 'sign-up']

  //??????token??????,?????????????????????
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {

    next('/signin')

    return
  }

  //??????token??????,??????????????????
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {

    next('/restaurants')

    return
  }

  next()
})

export default router

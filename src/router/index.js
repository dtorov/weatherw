import { createRouter, createWebHashHistory } from 'vue-router'
import WeatherMainView from '../views/WeatherMain.vue'
import WeatherConfigView from '../views/WeatherConfig.vue'

const routes = [
  {
    path: '/',
    name: 'WeatherMainView',
    component: WeatherMainView
  },
  {
    path: '/config',
    name: 'WeatherConfigView',
    component: WeatherConfigView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

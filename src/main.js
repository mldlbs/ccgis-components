import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import VueRouter from 'vue-router'
// import './public-path'
import store from './store'
import '@/assets/styles/ccgis.scss'
import '@/assets/icons' // icon

import 'gis-web-ui/dist/style.css'
import { GisWebUi } from 'gis-web-ui'
import * as DevComponents from '@gis'

Vue.use(GisWebUi)
Vue.use(DevComponents)

Vue.config.productionTip = false

Vue.use(VueRouter)

function render(props = {}) {
  // 在 render 中创建 VueRouter，可以保证在卸载微应用时，移除 location 事件监听，防止事件污染
  const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes
  })

  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}

render()


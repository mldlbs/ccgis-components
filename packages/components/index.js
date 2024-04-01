
/**
 * Gis组件开发
 */
// import Vue from 'vue'
import '../assets/styles/components.scss'

// import GisFeature from './GisFeature'

const components = [
]
const install = (Vue, options) => {
  components.forEach((it) => {
    Vue.component(it.name, it)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export const GisWebUi = { install }


/**
 * CIM接口开发
 */
import GisDraw from './components/GisDraw/index.vue'
import GisContourLine from './components/GisContourLine/index.vue'
import GisGradient from './components/GisGradient/index.vue'
import GisProjectionImage from './components/GisProjectionImage/index.vue'
import GisFeature from './components/GisFeature/index.vue'
import GisHeatmap from './components/GisHeatmap/index.vue'
import GisPipeBurst from './components/GisPipeBurst/index.vue'
import GisBestPath from './components/GisBestPath/index.vue'
import GisQuery from './components/GisQuery/index.vue'
import GisFlyTo from './components/GisFlyTo/index.vue'
import GisTest from './components/GisTest/index.vue'

const components = [GisTest, GisDraw, GisContourLine, GisGradient, GisProjectionImage, GisFeature, GisHeatmap, GisPipeBurst, GisBestPath, GisQuery, GisFlyTo]

function install(Vue, options) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export { install, GisDraw, GisContourLine, GisGradient, GisProjectionImage, GisFeature, GisHeatmap, GisPipeBurst, GisBestPath, GisQuery, GisFlyTo }

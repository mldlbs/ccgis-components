import { Injector } from 'didi'
import CoreModule from './GisMap3d/Core'
import Module from './GisMap3d/Module'

function bootstrap(bootstrapModules) {
  const modules = []
  const components = []

  function hasModule(m) {
    return modules.indexOf(m) >= 0
  }

  function addModule(m) {
    modules.push(m)
  }

  function visit(m) {
    if (hasModule(m)) {
      return
    }
    (m.__depends__ || []).forEach(visit)
    if (hasModule(m)) {
      return
    }
    addModule(m);
    (m.__init__ || []).forEach(function(c) {
      components.push(c)
    })
  }
  // 注入模块
  bootstrapModules.forEach(visit)

  const injector = new Injector(modules)
  components.forEach(function(c) {
    try {
      // eagerly resolve component (fn or string)
      injector[typeof c === 'string' ? 'get' : 'invoke'](c)
    } catch (e) {
      console.error('Failed to instantiate component')
      console.error(e.stack)
      throw e
    }
  })
  return injector
}

export function createInjector(options) {
  options = options || {}
  const configModule = {
    'config': ['value', options]
  }
  const modules = [configModule, CoreModule, Module].concat(options.modules || [])
  return bootstrap(modules)
}


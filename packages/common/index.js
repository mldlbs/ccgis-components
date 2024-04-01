import { createInjector } from './injector'

class CCGis {
  constructor(options, injector) {
    this.injector = injector = injector || createInjector(options)
    // API
    this.get = injector.get
    this.invoke = injector.invoke
  }

  destroy() {
    // this.get('eventBus').fire('ccgis.destroy')
  }

  clear() {
    // this.get('eventBus').fire('ccgis.clear')
  }
}

export { CCGis }

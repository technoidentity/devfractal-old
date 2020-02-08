import * as components from './src'

Object.keys(components).forEach(k => (global[k] = components[k]))

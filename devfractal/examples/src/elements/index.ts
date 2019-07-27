import { dynamicRouter } from 'technoidentity-devfractal-ui'
import * as components from './internal'
export const { Links: ElementsLinks, Routes: ElementsRoutes } = dynamicRouter(
  components,
  '/elements',
)

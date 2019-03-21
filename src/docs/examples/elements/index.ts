import { dynamicRouter } from '../../../devfractal'
import * as components from './internal'
export const { Links: ElementsLinks, Routes: ElementsRoutes } = dynamicRouter(
  components,
  '/elements',
)

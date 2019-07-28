import { dynamicRouter } from 'technoidentity-devfractal-ui'
import * as components from './internal'
export const { Links: LayoutLinks, Routes: LayoutRoutes } = dynamicRouter(
  components,
  '/layout',
)

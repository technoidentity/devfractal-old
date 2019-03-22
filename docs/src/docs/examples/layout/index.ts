import { dynamicRouter } from '../../../devfractal'
import * as components from './internal'
export const { Links: LayoutLinks, Routes: LayoutRoutes } = dynamicRouter(
  components,
  '/layout',
)

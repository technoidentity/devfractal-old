import { dynamicRouter } from '../../../devfractal'
import * as components from './internal'
export const { Links: ModifiersLinks, Routes: ModifiersRoutes } = dynamicRouter(
  components,
  '/modifiers',
)

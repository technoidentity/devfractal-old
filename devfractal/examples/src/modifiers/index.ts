import { dynamicRouter } from 'technoidentity-devfractal-ui'
import * as components from './internal'
export const { Links: ModifiersLinks, Routes: ModifiersRoutes } = dynamicRouter(
  components,
  '/modifiers',
)

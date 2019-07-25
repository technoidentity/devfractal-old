import { dynamicRouter } from 'technoidentity-devfractal'
import * as components from './internal'
export const { Links: ModifiersLinks, Routes: ModifiersRoutes } = dynamicRouter(
  components,
  '/layout',
)

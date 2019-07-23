import { dynamicRouter } from 'technoidentity-devfractal'
import * as components from './internal'
export const { Links: ColumnsLinks, Routes: ColumnsRoutes } = dynamicRouter(
  components,
  '/columns',
)

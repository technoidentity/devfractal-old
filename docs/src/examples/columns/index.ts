import { dynamicRouter } from '../../../devfractal'
import * as components from './internal'
export const { Links: ColumnsLinks, Routes: ColumnsRoutes } = dynamicRouter(
  components,
  '/columns',
)

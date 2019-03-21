import { dynamicRouter } from '../../../devfractal'
import * as components from './internal'
export const { Links: FormLinks, Routes: FormRoutes } = dynamicRouter(
  components,
  '/form',
)

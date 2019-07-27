import { dynamicRouter } from 'technoidentity-devfractal-ui'
import * as components from './internal'
export const { Links: FormLinks, Routes: FormRoutes } = dynamicRouter(
  components,
  '/forms',
)

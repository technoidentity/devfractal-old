export * from './ComponentRoutes'
export * from './CompositesRoutes'
export * from './CrudRoutes'
export * from './IndexRoutes'
export * from './TabRoutes'

import * as columns from 'technoidentity-devfractal-examples/dist/columns'
import * as elements from 'technoidentity-devfractal-examples/dist/elements'
import * as forms from 'technoidentity-devfractal-examples/dist/forms'
import * as layout from 'technoidentity-devfractal-examples/dist/layout'
import * as modifiers from 'technoidentity-devfractal-examples/dist/modifiers'
import { dynamicRouter } from 'technoidentity-devfractal-ui'

export const { Links: ColumnsLinks, Routes: ColumnsRoutes } = dynamicRouter(
  columns,
  '/columns',
)

export const { Links: ElementsLinks, Routes: ElementsRoutes } = dynamicRouter(
  elements,
  '/elements',
)

export const { Links: FormsLinks, Routes: FormsRoutes } = dynamicRouter(
  forms,
  '/forms',
)

export const { Links: LayoutLinks, Routes: LayoutRoutes } = dynamicRouter(
  layout,
  '/layout',
)

export const { Links: ModifiersLinks, Routes: ModifiersRoutes } = dynamicRouter(
  modifiers,
  '/modifiers',
)

import {
  columns,
  elements,
  forms,
  layout,
  modifiers,
} from 'devfractal-examples'
import { dynamicRouter } from 'devfractal-ui'

export * from './ComponentRoutes'
export * from './CompositesRoutes'
export * from './CrudRoutes'
export * from './IndexRoutes'
export * from './TabRoutes'

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

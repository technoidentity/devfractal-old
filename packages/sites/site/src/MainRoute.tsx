import {
  DropdownExampleRoutes,
  LoginFormVariantsRoutes,
  TodoRoutes,
} from 'devfractal-examples'
import React from 'react'
import {
  ColumnsRoutes,
  ComponentsRoutes,
  CompositesRoutes,
  ElementsRoutes,
  FormsRoutes,
  IndexRoutes,
  LayoutRoutes,
  ModifiersRoutes,
  TabsRoutes,
} from './routes'

export const CrudRoutes: React.FC = () => <TodoRoutes />

export const MainRoute: React.FC = () => (
  <>
    <IndexRoutes />
    <TabsRoutes />
    <FormsRoutes />
    <CompositesRoutes />
    <TodoRoutes />
    <ElementsRoutes />
    <ComponentsRoutes />
    <LayoutRoutes />
    <ColumnsRoutes />
    <ModifiersRoutes />
    <DropdownExampleRoutes />
    <LoginFormVariantsRoutes />
  </>
)

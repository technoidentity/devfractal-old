import React from 'react'
import {
  ColumnsRoutes,
  DropdownExampleRoutes,
  ElementsRoutes,
  FormRoutes,
  LayoutRoutes,
  LoginFormVariantsRoutes,
  ModifiersRoutes,
  TodoRoutes,
} from 'technoidentity-devfractal-examples'
import {
  ComponentsRoutes,
  CompositesRoutes,
  IndexRoutes,
  TabsRoutes,
} from './routes'

export const CrudRoutes: React.FC = () => <TodoRoutes />

export const MainRoute: React.FC = () => (
  <>
    <IndexRoutes />
    <TabsRoutes />
    <FormRoutes />
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

import React from 'react'
import { Route } from 'react-router'
import {
  ColumnsLinks,
  ElementsLinks,
  FormLinks,
  LayoutLinks,
  ModifiersLinks,
} from 'technoidentity-devfractal-examples'
import { ComponentsTab, CompositesTab } from '../Tabs'

export const TabsRoutes: React.FC = () => (
  <>
    <Route path="/form" component={FormLinks} />
    <Route path="/composites" component={CompositesTab} />
    <Route path="/components" component={ComponentsTab} />
    <Route path="/elements" component={ElementsLinks} />
    <Route path="/modifiers" component={ModifiersLinks} />
    <Route path="/layout" component={LayoutLinks} />
    <Route path="/columns" component={ColumnsLinks} />
  </>
)

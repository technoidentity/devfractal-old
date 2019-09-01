import { Route } from 'devfractal-router'
import React from 'react'
import { ComponentsTab, CompositesTab } from '../Tabs'
import {
  ColumnsLinks,
  ElementsLinks,
  FormsLinks,
  LayoutLinks,
  ModifiersLinks,
} from './index'

export const TabsRoutes: React.FC = () => (
  <>
    <Route path="/form" component={FormsLinks} />
    <Route path="/composites" component={CompositesTab} />
    <Route path="/components" component={ComponentsTab} />
    <Route path="/elements" component={ElementsLinks} />
    <Route path="/modifiers" component={ModifiersLinks} />
    <Route path="/layout" component={LayoutLinks} />
    <Route path="/columns" component={ColumnsLinks} />
  </>
)

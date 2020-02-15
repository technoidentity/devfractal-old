import React from 'react'
import { Route } from 'technoidentity-router'
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
    <Route exact={false} path="/form" component={FormsLinks} />
    <Route exact={false} path="/composites" component={CompositesTab} />
    <Route exact={false} path="/components" component={ComponentsTab} />
    <Route exact={false} path="/elements" component={ElementsLinks} />
    <Route exact={false} path="/modifiers" component={ModifiersLinks} />
    <Route exact={false} path="/layout" component={LayoutLinks} />
    <Route exact={false} path="/columns" component={ColumnsLinks} />
  </>
)

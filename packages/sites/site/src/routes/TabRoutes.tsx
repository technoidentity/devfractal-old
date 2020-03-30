import React from 'react'
import { SafeRoute } from 'srtp-core'
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
    <SafeRoute exact={false} path="/form" component={FormsLinks} />
    <SafeRoute exact={false} path="/composites" component={CompositesTab} />
    <SafeRoute exact={false} path="/components" component={ComponentsTab} />
    <SafeRoute exact={false} path="/elements" component={ElementsLinks} />
    <SafeRoute exact={false} path="/modifiers" component={ModifiersLinks} />
    <SafeRoute exact={false} path="/layout" component={LayoutLinks} />
    <SafeRoute exact={false} path="/columns" component={ColumnsLinks} />
  </>
)

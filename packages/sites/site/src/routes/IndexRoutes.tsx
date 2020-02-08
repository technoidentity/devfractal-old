import { Route } from 'stp-router'
import React from 'react'
import {
  BottomSection,
  ExploreUIComponents,
  ResourceSection,
  UIComponentsOverview,
} from '../IndexPage'

export const IndexRoutes: React.FC = () => (
  <>
    <Route path="/" component={UIComponentsOverview} />
    <Route path="/" component={ExploreUIComponents} />
    <Route path="/" component={BottomSection} />
    <Route path="/" component={ResourceSection} />
  </>
)

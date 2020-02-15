import React from 'react'
import { Route } from 'technoidentity-router'
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

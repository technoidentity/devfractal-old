import { Route } from 'devfractal-router'
import React from 'react'
import {
  BottomSection,
  ExploreUIComponents,
  FooterSection,
  IndexPageHeader,
  ResourceSection,
  UIComponentsOverview,
} from '../IndexPage'

export const IndexRoutes: React.FC = () => (
  <>
    <Route path="/" component={IndexPageHeader} />
    <Route exact path="/" component={UIComponentsOverview} />
    <Route exact path="/" component={ExploreUIComponents} />
    <Route exact path="/" component={BottomSection} />
    <Route exact path="/" component={ResourceSection} />
    <Route exact path="/" component={FooterSection} />
  </>
)

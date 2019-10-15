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
    <IndexPageHeader />
    <Route path="/" component={UIComponentsOverview} />
    <Route path="/" component={ExploreUIComponents} />
    <Route path="/" component={BottomSection} />
    <Route path="/" component={ResourceSection} />
    <FooterSection />
  </>
)

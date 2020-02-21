import React from 'react'
import { SafeRoute } from 'technoidentity-core'
import {
  BottomSection,
  ExploreUIComponents,
  ResourceSection,
  UIComponentsOverview,
} from '../IndexPage'

export const IndexRoutes: React.FC = () => (
  <>
    <SafeRoute path="/" component={UIComponentsOverview} />
    <SafeRoute path="/" component={ExploreUIComponents} />
    <SafeRoute path="/" component={BottomSection} />
    <SafeRoute path="/" component={ResourceSection} />
  </>
)

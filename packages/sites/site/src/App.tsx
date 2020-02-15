import React from 'react'
import { Router } from 'technoidentity-router'
import { SiteHeader } from './IndexPage'
import { MainRoute } from './MainRoute'
import { ScrollToTop } from './ScrollToTop'

export const App: React.FC = () => (
  <Router variant="hash">
    <ScrollToTop>
      <SiteHeader />
      <MainRoute />
    </ScrollToTop>
  </Router>
)

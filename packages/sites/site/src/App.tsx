import { Router } from 'devfractal-router'
import React from 'react'
import { SiteFooter, SiteHeader } from './IndexPage'
import { MainRoute } from './MainRoute'
import { ScrollToTop } from './ScrollToTop'

export const App: React.FC = () => (
  <Router variant="hash">
    <ScrollToTop>
      <SiteHeader />
      <MainRoute />
    </ScrollToTop>
    <SiteFooter />
  </Router>
)

import { Router } from 'devfractal-router'
import React from 'react'
import { MainRoute } from './MainRoute'
import { ScrollToTop } from './ScrollToTop'

export const App: React.FC = () => (
  <Router variant="hash">
    <ScrollToTop>
      <MainRoute />
    </ScrollToTop>
  </Router>
)

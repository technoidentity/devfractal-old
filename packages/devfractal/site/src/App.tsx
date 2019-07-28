import React from 'react'
import { HashRouter } from 'react-router-dom'
import { MainRoute } from './MainRoute'
import { ScrollToTop } from './ScrollToTop'

export const App: React.FC = () => (
  <HashRouter>
    <ScrollToTop>
      <MainRoute />
    </ScrollToTop>
  </HashRouter>
)

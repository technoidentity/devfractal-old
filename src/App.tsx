import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Docs } from './docs'
import { ScrollToTop } from './docs'

export const App: React.FC = () => (
  <HashRouter>
    <ScrollToTop>
      <Docs />
    </ScrollToTop>
  </HashRouter>
)

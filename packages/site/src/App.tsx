import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Routes } from './Routes'
import { ScrollToTop } from './ScrollToTop'

export const App: React.FC = () => (
  <HashRouter>
    <ScrollToTop>
      <Routes />
    </ScrollToTop>
  </HashRouter>
)

import React from 'react'
import { HashRouter } from 'react-router-dom'
import { CleaveComponent } from './examples/composites/CleaveComponent'
import { Routes } from './Routes'
import { ScrollToTop } from './ScrollToTop'

export const App: React.FC = () => (
  <HashRouter>
    <ScrollToTop>
      <CleaveComponent />
      <Routes />
    </ScrollToTop>
  </HashRouter>
)

import React from 'react'
import { HashRouter } from 'react-router-dom'
// import { Docs } from './docs'
import { ScrollToTop } from './docs'

import { StepComponent } from './devfractal/src/components/StepComponent/StepComponent'

export const App: React.SFC = () => (
  <HashRouter>
    <ScrollToTop>
      <StepComponent />
    </ScrollToTop>
  </HashRouter>
)

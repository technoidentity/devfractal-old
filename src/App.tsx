import React from 'react'
import { HashRouter } from 'react-router-dom'
// import { Docs } from './docs'
import { ScrollToTop } from './docs'

// import { StepComponent } from './devfractal/src/components/StepComponent/StepComponent'

import { DatePicker } from './devfractal/src/components/date-picker/DatePicker'

export const App: React.SFC = () => (
  <HashRouter>
    <ScrollToTop>
      <DatePicker />
    </ScrollToTop>
  </HashRouter>
)

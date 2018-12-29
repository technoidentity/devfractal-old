import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Docs } from './docs'

export const App: React.SFC = () => (
  <BrowserRouter>
    <Docs />
  </BrowserRouter>
)

// tslint:disable-next-line:no-default-export
export default App

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './docs/Routes'

export const App: React.SFC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

// tslint:disable-next-line:no-default-export
export default App

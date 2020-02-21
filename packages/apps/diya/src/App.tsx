import 'bulma/css/bulma.css'
import React from 'react'
import { APIComponents, UIComponents } from 'technoidentity-devfractal'

export const App = () => (
  <APIComponents.Provider value={UIComponents}>
    <h1>Hello</h1>
  </APIComponents.Provider>
)

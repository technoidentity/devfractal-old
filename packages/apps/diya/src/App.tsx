import 'bulma/css/bulma.css'
import React from 'react'
import {
  APIComponents,
  CrudComponents,
  UIComponents,
  UICrudComponents,
} from 'technoidentity-devfractal'
import { SuperAdmin } from './SuperAdmin'

export const App = () => (
  <APIComponents.Provider value={UIComponents}>
    <CrudComponents.Provider value={UICrudComponents}>
      <SuperAdmin />
    </CrudComponents.Provider>
  </APIComponents.Provider>
)

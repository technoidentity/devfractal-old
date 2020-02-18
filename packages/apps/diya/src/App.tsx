import 'bulma/css/bulma.css'
import React from 'react'
import { APIComponents, UIComponents } from 'technoidentity-devfractal'
import { AppProviders } from './auth/AppProviders'
import { Auth } from './auth/Auth'

export const App = () => (
  <APIComponents.Provider value={UIComponents}>
    <AppProviders>
      <Auth />
    </AppProviders>
  </APIComponents.Provider>
)

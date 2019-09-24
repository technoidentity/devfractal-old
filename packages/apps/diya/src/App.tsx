import 'bulma/css/bulma.css'
import React from 'react'
import { AppProviders } from './auth/AppProviders'
import { Auth } from './auth/Auth'

export const App = () => (
  <AppProviders>
    <Auth />
  </AppProviders>
)

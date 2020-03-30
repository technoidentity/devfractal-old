import React from 'react'
import { APIComponents, SafeRouter } from 'srtp-core'
import { UIComponents } from 'srtp-ui'
import { TodoApp } from './TodoApp'

export const App = () => (
  <APIComponents.Provider value={UIComponents}>
    <SafeRouter variant="browser">
      <TodoApp />
    </SafeRouter>
  </APIComponents.Provider>
)

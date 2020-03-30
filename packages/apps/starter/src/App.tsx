import React from 'react'
import { APIComponents, SafeRouter } from 'technoidentity-core'
import { UIComponents } from 'technoidentity-ui'
import { TodoApp } from './TodoApp'

export const App = () => (
  <APIComponents.Provider value={UIComponents}>
    <SafeRouter variant="browser">
      <TodoApp />
    </SafeRouter>
  </APIComponents.Provider>
)

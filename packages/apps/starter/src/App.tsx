import React from 'react'
import {
  APIComponents,
  SafeRouter,
  UIComponents,
} from 'technoidentity-devfractal'
import { TodoApp } from './TodoApp'

export const App = () => (
  <APIComponents.Provider value={UIComponents}>
    <SafeRouter variant="browser">
      <TodoApp />
    </SafeRouter>
  </APIComponents.Provider>
)

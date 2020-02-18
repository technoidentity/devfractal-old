import React from 'react'
import { APIComponents, Router, UIComponents } from 'technoidentity-devfractal'
import { TodoApp } from './TodoApp'

export const App = () => (
  <APIComponents.Provider value={UIComponents}>
    <Router variant="browser">
      <TodoApp />
    </Router>
  </APIComponents.Provider>
)

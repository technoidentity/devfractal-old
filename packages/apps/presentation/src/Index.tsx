import 'bulma/bulma.sass'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { render } from 'react-dom'
import { APIComponents, UIComponents } from 'technoidentity-devfractal'
import { TodoApp } from './todo/TodoAppV5'

render(
  <APIComponents.Provider value={UIComponents}>
    <TodoApp />
  </APIComponents.Provider>,
  document.getElementById('root'),
)

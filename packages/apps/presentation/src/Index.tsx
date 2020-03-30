import 'bulma/bulma.sass'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { render } from 'react-dom'
import { APIComponents } from 'srtp-core'
import { UIComponents } from 'srtp-ui'
import { TodoApp } from './todo/TodoAppV5'

render(
  <APIComponents.Provider value={UIComponents}>
    <TodoApp />
  </APIComponents.Provider>,
  document.getElementById('root'),
)

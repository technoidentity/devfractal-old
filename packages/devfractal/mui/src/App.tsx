import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import { render } from 'react-dom'
import { APIComponents } from 'technoidentity-core'
import 'typeface-roboto'
import { MuiComponents } from './APIComponents'

const App: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <APIComponents.Provider value={MuiComponents}>
        <h1>Hello</h1>
      </APIComponents.Provider>
    </MuiPickersUtilsProvider>
  )
}

render(<App />, document.getElementById('root'))

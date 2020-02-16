import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import { render } from 'react-dom'
import 'typeface-roboto'

const App: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <h1>Hello</h1>
    </MuiPickersUtilsProvider>
  )
}

render(<App />, document.getElementById('root'))

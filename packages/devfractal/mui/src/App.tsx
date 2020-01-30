import DateFnsUtils from '@date-io/date-fns'
import { Button } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import { render } from 'react-dom'
import 'typeface-roboto'

const App: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Button>OK</Button>
    </MuiPickersUtilsProvider>
  )
}
render(<App />, document.getElementById('root'))

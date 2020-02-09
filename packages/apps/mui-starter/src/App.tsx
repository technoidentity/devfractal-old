import DateFnsUtils from '@date-io/date-fns'
import { Button } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import 'typeface-roboto'

export const App = () => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Button variant="contained" color="primary">
      OK
    </Button>
  </MuiPickersUtilsProvider>
)

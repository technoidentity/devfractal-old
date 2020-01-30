import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import { render } from 'react-dom'
import 'typeface-roboto'
import { FormikWithMuiForm } from './MuiFormExample'

const App: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <FormikWithMuiForm />
    </MuiPickersUtilsProvider>
  )
}
render(<App />, document.getElementById('root'))

import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import 'bulma/css/bulma.css'
import React from 'react'
import { render } from 'react-dom'
import { FieldsMuiGeneralForm } from './ui/composites/FieldsMuiGeneralForm'

export const App: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <FieldsMuiGeneralForm />
    </MuiPickersUtilsProvider>
  )
}

render(<App />, document.getElementById('root'))

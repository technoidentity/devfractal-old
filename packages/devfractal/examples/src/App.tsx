import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import 'bulma/css/bulma.css'
import React from 'react'
import { render } from 'react-dom'
import { MuiSimpleFormExample } from './mui'

export const App: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiSimpleFormExample />
    </MuiPickersUtilsProvider>
  )
}

render(<App />, document.getElementById('root'))

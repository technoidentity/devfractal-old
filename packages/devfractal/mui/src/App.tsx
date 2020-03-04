import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import { render } from 'react-dom'
import { APIComponents, SafeRoute, SafeRouter } from 'technoidentity-core'
import { boolean, date, empty, number, req, string } from 'technoidentity-utils'
import 'typeface-roboto'
import { MuiComponents } from './APIComponents'
import { Simple } from './SimpleForm'
import { SpecField } from './SpecField'

// tslint:disable-next-line: typedef
const Todo = req({
  id: number,
  title: string,
  done: boolean,
  deadline: date,
})

const CheckingComponents: React.FC = () => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <APIComponents.Provider value={MuiComponents}>
      <Simple.Form initialValues={empty(Todo)}>
        <SpecField spec={Todo} name="id" />
        <SpecField spec={Todo} name="title" />
        <SpecField spec={Todo} name="done" />
        <SpecField spec={Todo} name="deadline" autoOk />

        <Simple.FormButtons />
      </Simple.Form>
    </APIComponents.Provider>
  </MuiPickersUtilsProvider>
)

const App: React.FC = () => {
  return (
    <SafeRouter variant="browser">
      <SafeRoute path="/" component={CheckingComponents} />
    </SafeRouter>
  )
}

render(<App />, document.getElementById('root'))

import React from 'react'
import { render } from 'react-dom'
import { SafeRoute } from 'srtp-core'
import { boolean, date, empty, number, req, string } from 'srtp-utils'
import 'typeface-roboto'
import { AppProvider } from './AppProvider'
import { Simple } from './SimpleForm'
import { SpecField } from './SpecField'

// tslint:disable-next-line: typedef
const Todo = req({
  id: number,
  title: string,
  done: boolean,
  deadline: date,
})

const TodoForm: React.FC = () => (
  <Simple.Form initialValues={empty(Todo)}>
    <SpecField spec={Todo} name="id" />
    <SpecField spec={Todo} name="title" />
    <SpecField spec={Todo} name="done" />
    <SpecField spec={Todo} name="deadline" autoOk />

    <Simple.FormButtons />
  </Simple.Form>
)

const App: React.FC = () => {
  return (
    <AppProvider>
      <SafeRoute path="/" component={TodoForm} />
    </AppProvider>
  )
}

render(<App />, document.getElementById('root'))

import React from 'react'
import { render } from 'react-dom'
import { SimpleEditor } from './lib'
import { SimpleTable, SimpleViewer } from './simple'

// tslint:disable typedef

const todo = {
  id: 100,
  title: 'bring milk',
  done: false,
  scheduled: new Date(),
}

const todos: ReadonlyArray<typeof todo> = [todo, todo]

export const App: React.FC = () => (
  <>
    <SimpleEditor id="id" data={todo} />
    <SimpleViewer data={todo} />
    <SimpleTable data={todos} />
  </>
)

render(<App />, document.getElementById('root'))

import React from 'react'
import { render } from 'react-dom'
import { SimpleEditor } from './lib'
import { SimpleTable, SimpleViewer, SimpleCrud } from './simple'
import { BrowserRouter } from 'react-router-dom'
import { string, boolean, number } from 'io-ts'
import { req } from 'technoidentity-utils'

// tslint:disable typedef

const todo = {
  id: 100,
  title: 'bring milk',
  done: false,
}

const Todo = req({
  id: number,
  title: string,
  done: boolean,
})

const todos: ReadonlyArray<typeof todo> = [todo, todo]

export const App: React.FC = () => (
  <BrowserRouter>
    <SimpleCrud
      baseURL="http://localhost:3000"
      id="id"
      resource="todos"
      value={Todo}
    />
  </BrowserRouter>
)

// export const App: React.FC = () => (
//   <>
//     <SimpleEditor id="id" data={todo} />
//     <SimpleViewer data={todo} />
//     <SimpleTable data={todos} />
//   </>
// )

render(<App />, document.getElementById('root'))

import 'bulma/css/bulma.css'
import React from 'react'
import { render } from 'react-dom'
import { rest } from 'technoidentity-core'
import { Router, SimpleRedirect } from 'technoidentity-router'
import { ButtonLink, Section, Simple } from 'technoidentity-ui'
import { boolean, number, obj, string } from 'technoidentity-utils'
import {
  CrudRoutes,
  CrudTable,
  formComponent,
  links,
  listComponent,
} from './new'

// tslint:disable typedef

const Todo = obj({ id: number }, { title: string, done: boolean })

const api = rest(Todo, 'id', 'todos', {
  baseURL: 'http://localhost:3000',
  withCredentials: true,
})

// api
//   .many()
//   .then(values => console.log(values))
//   .catch(err => console.error(err))

const TodoForm = formComponent(Todo, ({ initial, onSubmit }) => (
  <Simple.Form initialValues={initial} onSubmit={onSubmit}>
    <Simple.Text name="title" />
    <Simple.Checkbox name="done" />
    <Simple.FormButtons />
  </Simple.Form>
))

const { create: createTo, edit: editTo } = links('todos')

const TodoList = listComponent(Todo, ({ data }) => (
  <>
    <ButtonLink to={createTo} variant="primary">
      Add
    </ButtonLink>
    <CrudTable
      data={data}
      select={['title', 'done']}
      editTo={({ id }) => editTo(id)}
    />
  </>
))

export const App: React.FC = () => {
  return (
    <Router>
      <Section>
        <SimpleRedirect from="/" to="/todos" />
        <CrudRoutes api={api} form={TodoForm} list={TodoList} />
      </Section>
    </Router>
  )
}

// const App: React.FC = () => {
//   return (
//     <APIProvider.Provider value={UIComponents}>
//       <h1>Hello, World</h1>
//     </APIProvider.Provider>
//   )
// }

render(<App />, document.getElementById('root'))

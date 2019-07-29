import { FormikActions } from 'formik'
import { boolean, number, readonlyArray, string, TypeOf, union } from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { DateFromISOString } from 'io-ts-types/lib/DateFromISOString'
import React from 'react'
import { Switch } from 'react-router'
import {
  Get,
  Post,
  Put,
  rest,
  useRedirect,
} from 'technoidentity-devfractal-api'
import { Editor } from 'technoidentity-devfractal-crud'
import {
  Router,
  SafeRoute as Route,
  useMatch,
} from 'technoidentity-devfractal-router'
import { RowClickEvent, SimpleTable } from 'technoidentity-devfractal-simple'
import { component, Section, Title } from 'technoidentity-devfractal-ui-core'
import { fn, props, req } from 'technoidentity-utils'

const ISODate = union([date, DateFromISOString])

const Todo = props(
  {
    id: number,
  },
  {
    title: string,
    scheduled: ISODate,
    done: boolean,
  },
)

type Todo = TypeOf<typeof Todo>

const todoApi = rest({
  baseURL: 'http://localhost:3000',
  resource: 'todos',
  type: Todo,
})

const initialValues: Todo = { title: '', scheduled: new Date(), done: false }

export const TodoFormProps = props(
  { initial: Todo },
  {
    onSubmit: fn<
      (values: Todo, actions: FormikActions<Todo>) => Promise<void>
    >(),
  },
)
type TodoFormProps = TypeOf<typeof TodoFormProps>

const TodoForm = component(TodoFormProps, ({ onSubmit, initial }) => (
  <Editor id="id" data={initial || initialValues} onSubmit={onSubmit} />
))

const CreateTodoRoute = () => (
  <>
    <Title textAlignment="centered">Create Todo</Title>
    <Post component={TodoForm} onPost={todoApi.create} redirectPath={'/'} />
  </>
)

const Params = req({ id: string })

export const EditTodoRoute = () => {
  const { params } = useMatch(Params)

  return (
    <Put<Todo>
      id={params.id}
      doGet={todoApi.get}
      onPut={todoApi.update}
      component={TodoForm}
      redirectPath="/"
    />
  )
}

const TodoListViewProps = req({
  todoList: readonlyArray(Todo),
  onEdit: fn<(evt: RowClickEvent<Todo>) => void>(),
})

export const TodoListView = component(
  TodoListViewProps,
  ({ todoList, onEdit }) => (
    <SimpleTable data={todoList} onRowClicked={onEdit} />
  ),
)

export const TodoListRoute = () => {
  const { onRedirect } = useRedirect()

  return (
    <>
      <Title textAlignment="centered">Todo List</Title>
      <Get asyncFn={() => todoApi.many()}>
        {data => (
          <TodoListView
            todoList={data}
            onEdit={evt => onRedirect(`/todos/${evt.value.id}/edit`)}
          />
        )}
      </Get>
    </>
  )
}

export const TodoApp = () => (
  <Section>
    <Router variant="browser">
      <Switch>
        <Route exact path="/" component={TodoListRoute} />
        <Route exact path="/todos/add" component={CreateTodoRoute} />
        <Route exact path="/todos/:id/edit" component={EditTodoRoute} />
      </Switch>
    </Router>
  </Section>
)

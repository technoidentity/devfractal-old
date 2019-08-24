import { FormikActions } from 'formik'
import { boolean, number, readonlyArray, string, TypeOf, union } from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { DateFromISOString } from 'io-ts-types/lib/DateFromISOString'
import React from 'react'
import {
  component,
  Editor,
  Get,
  Post,
  Put,
  rest,
  Route,
  Router,
  RowClickEvent,
  Section,
  SimpleTable,
  Title,
  useMatch,
  useRedirect,
} from 'technoidentity-devfractal'
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

const todoApi = rest(Todo, 'id', {
  baseURL: 'http://localhost:3000',
  resource: 'todos',
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
    <Post component={TodoForm} onPost={todoApi.create} redirectTo={'/'} />
  </>
)

const Params = req({ id: string })

export const EditTodoRoute = () => {
  const { params } = useMatch(Params)

  return (
    <Put
      id={params.id}
      doGet={todoApi.get as any}
      onPut={todoApi.update as any}
      component={TodoForm}
      redirectTo="/"
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
      <Route exact path="/" component={TodoListRoute} />
      <Route exact path="/todos/add" component={CreateTodoRoute} />
      <Route exact path="/todos/:id/edit" component={EditTodoRoute} />
    </Router>
  </Section>
)

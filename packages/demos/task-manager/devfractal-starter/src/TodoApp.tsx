import { FormikActions } from 'formik'
import { boolean, number, readonlyArray, string, TypeOf, union } from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { DateFromISOString } from 'io-ts-types/lib/DateFromISOString'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { NavLink } from 'react-router-dom'
import {
  ButtonsGroup,
  component,
  Editor,
  Post,
  Put,
  rest,
  Router,
  RowClickEvent,
  SafeRoute as Route,
  Section,
  SimpleAsync,
  SimpleTable,
  Title,
  useMatch,
  useRouter,
} from 'technoidentity-devfractal'
import { cast, empty, fn, props, req } from 'technoidentity-utils'

const ISODate = union([date, DateFromISOString])

const Todo = req({
  id: number,
  title: string,
  scheduled: ISODate,
  done: boolean,
})

type Todo = TypeOf<typeof Todo>

const todoApi = rest({
  baseURL: 'http://localhost:3000',
  resource: 'todos',
  type: Todo,
})

const TodoFormProps = props(
  { initial: Todo },
  {
    onSubmit: fn<
      (values: Todo, actions: FormikActions<Todo>) => Promise<void>
    >(),
  },
)

const TodoForm = component(TodoFormProps, ({ onSubmit, initial }) => (
  <Editor id="id" data={initial || empty(Todo)} onSubmit={onSubmit} />
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
  cast(Params, params)

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

const TodoListView = component(TodoListViewProps, ({ todoList, onEdit }) => (
  <>
    <ButtonsGroup alignment="right">
      <NavLink to="/todos/add" className="button is-primary">
        Add
      </NavLink>
    </ButtonsGroup>
    <SimpleTable data={todoList} onRowClicked={onEdit} />
  </>
))

const TodoListRoute = () => {
  const { history } = useRouter()

  return (
    <>
      <Title textAlignment="centered">Todo List</Title>
      <SimpleAsync asyncFn={todoApi.many}>
        {({ data }) => (
          <TodoListView
            todoList={data}
            onEdit={evt => history.push(`/todos/${evt.value.id}/edit`)}
          />
        )}
      </SimpleAsync>
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

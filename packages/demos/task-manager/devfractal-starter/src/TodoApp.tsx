import { boolean, number, readonlyArray, string, TypeOf, union } from 'io-ts'
import { date, DateFromISOString } from 'io-ts-types'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { NavLink } from 'react-router-dom'
import {
  ButtonsGroup,
  component,
  formSubmit,
  Post,
  Put,
  rest,
  Router,
  RowClickEvent,
  SafeRoute as Route,
  Section,
  SimpleAsync,
  SimpleEditor,
  SimpleTable,
  Title,
  useMatch,
  useRouter,
} from 'technoidentity-devfractal'
import { fn, props, req, typeInvariant } from 'technoidentity-utils'

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

const initialValues: Todo = {
  id: -100,
  title: '',
  scheduled: new Date(),
  done: false,
}

const TodoFormProps = props(
  { initial: Todo },
  { onSubmit: fn<(values: Todo) => Promise<void>>() },
)

const TodoForm = component(TodoFormProps, ({ onSubmit, initial }) => (
  <SimpleEditor
    id="id"
    data={initial || initialValues}
    onSubmit={formSubmit(onSubmit)}
  />
))

const CreateTodoRoute = () => (
  <>
    <Title textAlignment="centered">Create Todo</Title>
    <Post component={TodoForm} onPost={todoApi.create} redirectURL={'/'} />
  </>
)

const Params = req({ id: string })

export const EditTodoRoute = () => {
  const { params } = useMatch<TypeOf<typeof Params>>()
  typeInvariant(Params, params)

  return (
    <Put<Todo>
      id={params.id}
      doGet={todoApi.get}
      onPut={todoApi.update}
      component={TodoForm}
      redirectURL="/"
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

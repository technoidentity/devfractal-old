import { FormikHelpers } from 'formik'
import React from 'react'
import {
  component,
  Editor,
  Get,
  Post,
  Put,
  rest,
  RowClickEvent,
  SafeRoute,
  SafeRouter,
  Section,
  SimpleTable,
  Title,
  useParamsSafe,
  useRedirect,
} from 'technoidentity-devfractal'
import {
  boolean,
  fn,
  ISODate,
  number,
  obj,
  readonlyArray,
  req,
  string,
  TypeOf,
} from 'technoidentity-utils'

const Todo = obj(
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

const todoApi = rest(Todo, 'id', 'todos', { baseURL: 'http://localhost:3000' })

const initialValues: Todo = { title: '', scheduled: new Date(), done: false }

export const TodoFormProps = obj(
  { initial: Todo },
  {
    onSubmit: fn<
      (values: Todo, actions: FormikHelpers<Todo>) => Promise<void>
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
  const params = useParamsSafe(Params)

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
    <SafeRouter variant="browser">
      <SafeRoute exact path="/" component={TodoListRoute} />
      <SafeRoute exact path="/todos/add" component={CreateTodoRoute} />
      <SafeRoute exact path="/todos/:id/edit" component={EditTodoRoute} />
    </SafeRouter>
  </Section>
)

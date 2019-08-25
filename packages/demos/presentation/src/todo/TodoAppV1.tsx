import { Form, Formik } from 'formik'
import { type } from 'io-ts'
import { IntFromString } from 'io-ts-types/lib/IntFromString'
import React from 'react'
import {
  Button,
  CheckboxField,
  DateField,
  Field,
  Get,
  InputField,
  Label,
  Post,
  Put,
  SubmitAction,
  Title,
  useMatch,
} from 'technoidentity-devfractal'
import { empty } from 'technoidentity-utils'
import { Todo, todoAPI } from './common'
import { TodoTable } from './TodoTable'

interface TodoFormProps {
  readonly initial?: Todo
  readonly onSubmit: SubmitAction<Todo>
}

const TodoFormInner = () => (
  <Form>
    <Label>Title</Label>
    <InputField type="text" name="title" />

    <Label>Scheduled</Label>
    <DateField name="scheduled" />

    <Label>Done</Label>
    <CheckboxField name="done" />

    <Field groupModifier="grouped-centered">
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="danger" type="reset">
        Reset
      </Button>
    </Field>
  </Form>
)

const TodoForm: React.FC<TodoFormProps> = ({ initial, onSubmit }) => (
  <Formik
    initialValues={initial || empty(Todo)}
    onSubmit={onSubmit}
    component={TodoFormInner}
  />
)

const CreateTodo = () => (
  <Post<Todo>
    component={TodoForm}
    onPost={todoAPI.create}
    redirectTo="/todos"
  />
)

const EditTodo: React.FC = () => {
  const {
    params: { id },
  } = useMatch(type({ id: IntFromString }))

  return (
    <Put<Todo, 'id'>
      id={id}
      doGet={todoAPI.get}
      onPut={todoAPI.update}
      component={TodoForm}
      redirectTo="/todos"
    />
  )
}
const TodoList = () => (
  <>
    <Title textAlignment="centered">Todo List</Title>
    <Get asyncFn={() => todoAPI.many()}>
      {data => <TodoTable data={data} />}
    </Get>
  </>
)

export { CreateTodo, EditTodo, TodoList }

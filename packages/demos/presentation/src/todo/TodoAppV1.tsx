import { Form, Formik } from 'formik'
import { type } from 'io-ts'
import { IntFromString } from 'io-ts-types/lib/IntFromString'
import React from 'react'
import {
  Button,
  CheckboxField,
  DateField,
  ErrorField,
  Field,
  Get,
  InputField,
  Label,
  Post,
  Put,
  SubmitAction,
  Title,
  useParams,
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
    <Field>
      <Label>Title</Label>
      <InputField type="text" name="title" />
      <ErrorField name="title" />
    </Field>

    <Field>
      <Label>Scheduled</Label>
      <DateField name="scheduled" />
      <ErrorField name="title" />
    </Field>

    <Field>
      <Label>Done</Label>
      <CheckboxField name="done" />
      <ErrorField name="done" />
    </Field>

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
  <Post component={TodoForm} onPost={todoAPI.create} redirectTo="/todos" />
)

const Id = type({ id: IntFromString })

const EditTodo: React.FC = () => {
  const { id } = useParams(Id)

  return (
    <Put
      id={id}
      doGet={todoAPI.get}
      onPut={todoAPI.replace}
      component={TodoForm}
      redirectTo="/todos"
    />
  )
}

const TodoList = () => (
  <>
    <Title textAlignment="centered">Todo List</Title>
    <Get asyncFn={() => todoAPI.many()} component={TodoTable} />
  </>
)

export { CreateTodo, EditTodo, TodoList }

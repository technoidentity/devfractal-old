import { ErrorMessage, Field, Form, Formik } from 'formik'
import { type } from 'io-ts'
import { IntFromString } from 'io-ts-types/lib/IntFromString'
import React from 'react'
import {
  Button,
  CheckBox,
  DateInput,
  Field as UIField,
  Get,
  Input,
  Label,
  ServerError,
  SubmitAction,
  Title,
  useMatch,
  useSubmitRedirect,
} from 'technoidentity-devfractal'
import { Todo, todoAPI } from './common'
import { TodoTable } from './TodoTable'

const FormikDate: React.FC = ({ form, field, ...props }: any) => (
  <DateInput
    {...props}
    onChange={date => form.setFieldValue(field.name, date)}
    name={field.name}
    onBlur={field.onBlur}
    selected={field.value}
  />
)

const InputInner: React.FC = ({ form, field, ...props }: any) => (
  <Input {...props} {...field} />
)

const TodoFormInner = () => (
  <Form>
    <UIField>
      <Label>Title</Label>
      <Field name="title" component={InputInner} />
      <ErrorMessage name="title" />
    </UIField>

    <UIField>
      <Label>Scheduled</Label>
      <Field component={FormikDate} name="scheduled" />
      <ErrorMessage name="scheduled" />
    </UIField>

    <UIField>
      <Label>Done</Label>
      <Field name="done" component={CheckBox} />
      <ErrorMessage name="title" />
    </UIField>

    <UIField groupModifier="grouped-centered">
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="danger" type="reset">
        Reset
      </Button>
    </UIField>
  </Form>
)

const initialValues: Todo = { title: '', done: false, scheduled: new Date() }

interface TodoFormProps {
  readonly initial?: Todo
  readonly onSubmit: SubmitAction<Todo>
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, initial }) => (
  <Formik
    initialValues={initial || initialValues}
    onSubmit={onSubmit}
    component={TodoFormInner}
  />
)

const CreateTodo = () => {
  const { serverError, onSubmit } = useSubmitRedirect(todoAPI.create, '/todos')

  return (
    <>
      <Title textAlignment="centered">Create Todo</Title>
      <ServerError error={serverError} />
      <TodoForm onSubmit={onSubmit} />
    </>
  )
}

interface EditTodoProps {
  readonly id: number
}

const EditTodo: React.FC<EditTodoProps> = () => {
  const {
    params: { id },
  } = useMatch(type({ id: IntFromString }))

  const { serverError, onSubmit } = useSubmitRedirect(
    data => todoAPI.update(id, data),
    '/todos',
  )

  return (
    <>
      <Title textAlignment="centered">Edit Todo</Title>
      <ServerError error={serverError} />
      <Get asyncFn={todoAPI.get} deps={[id]}>
        {(data: Todo) => <TodoForm initial={data} onSubmit={onSubmit} />}
      </Get>
    </>
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

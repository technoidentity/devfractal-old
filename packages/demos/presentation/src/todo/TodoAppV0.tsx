import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik'
import React from 'react'
import {
  Button,
  CheckBox,
  DateInput,
  Field as UIField,
  Input,
  Label,
  ServerError,
  SubmitAction,
  Text,
  Title,
  useGet,
  useParams,
  useSubmitRedirect,
} from 'technoidentity-devfractal'
import { type } from 'technoidentity-spec'
import { IntFromString } from 'technoidentity-spec'
import * as yup from 'yup'
import { Todo, todoAPI } from './common'
import { TodoTable } from './TodoTable'

const FormikDate: React.FC<FieldProps<Todo>> = ({ form, field, ...props }) => (
  <DateInput
    {...props}
    onChange={date => form.setFieldValue(field.name, date)}
    name={field.name}
    onBlur={field.onBlur}
    selected={field.value}
  />
)

const FormikInput: React.FC<FieldProps<Todo>> = ({ form, field, ...props }) => (
  <Input {...props} {...field} />
)

const TodoFormInner = () => (
  <Form>
    <UIField>
      <Label>Title</Label>
      <Field name="title" component={FormikInput} />
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

const schema: yup.Schema<Todo> = yup.object().shape({
  title: yup
    .string()
    .required()
    .min(10)
    .max(50),

  done: yup.bool().required(),
  scheduled: yup

    .date()
    .required()
    .min(new Date()),
})

interface TodoFormProps {
  readonly initial?: Todo
  readonly onSubmit: SubmitAction<Todo>
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, initial }) => (
  <Formik
    initialValues={initial || initialValues}
    onSubmit={onSubmit}
    validationSchema={schema}
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

const EditTodo: React.FC = () => {
  const { id } = useParams(type({ id: IntFromString }))

  const result = useGet(todoAPI.get, id)

  const { serverError, onSubmit } = useSubmitRedirect(
    data => todoAPI.update(id, data),
    '/todos',
  )

  return (
    <>
      {result.state === 'success' ? (
        <>
          <Title textAlignment="centered">Edit Todo</Title>
          <ServerError error={serverError} />
          <TodoForm initial={result.data} onSubmit={onSubmit} />
        </>
      ) : result.state === 'failure' ? (
        <Text color="danger" textSize="3">
          {result.error.message}
        </Text>
      ) : (
        <Text title="3">Loading...</Text>
      )}
    </>
  )
}

const TodoList = () => {
  const result = useGet(todoAPI.many)

  return (
    <>
      {result.state === 'success' ? (
        <>
          <Title textAlignment="centered">Todo List</Title>
          <TodoTable data={result.data} />
        </>
      ) : result.state === 'failure' ? (
        <Text color="danger" textSize="3">
          {result.error.message}
        </Text>
      ) : (
        <Text title="3">Loading...</Text>
      )}
    </>
  )
}

export { CreateTodo, EditTodo, TodoList }

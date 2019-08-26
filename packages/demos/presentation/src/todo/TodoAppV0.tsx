import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik'
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
  useParams,
  useSubmitRedirect,
} from 'technoidentity-devfractal'
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

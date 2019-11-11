import { Field, Form, Formik, FormikActions } from 'formik'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Text, Title } from 'technoidentity-devfractal'
import { FSTodo, fsTodoAPI } from '../common'

export interface AddTodoProps {
  onAddTodo(
    todo: Omit<FSTodo, 'id'>,
    actions: FormikActions<Omit<FSTodo, 'id'>>,
  ): void
}

export const FSAddTodoView: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  return (
    <>
      <Title>Add Todo Form</Title>
      <Formik
        initialValues={{ title: '', done: false, completed: new Date() }}
        onSubmit={onAddTodo}
      >
        {() => {
          return (
            <Form>
              <Field name="title" type="text" />
              <Field name="done" component="checkbox" />
              <button type="submit">Submit</button>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export const FSAddTodo: React.FC<RouteComponentProps> = ({ history }) => {
  const [err, setErr] = React.useState('')
  // tslint:disable-next-line: typedef
  const handleAddTodo = async (
    todo: Omit<FSTodo, 'id'>,
    actions: FormikActions<typeof todo>,
  ) => {
    try {
      await fsTodoAPI.create(todo)
      history.push('/todos')
    } catch (err) {
      setErr(err.message)
    } finally {
      actions.setSubmitting(false)
    }
  }
  return (
    <>
      <Text textColor="danger">{err}</Text>
      <FSAddTodoView onAddTodo={handleAddTodo} />
    </>
  )
}

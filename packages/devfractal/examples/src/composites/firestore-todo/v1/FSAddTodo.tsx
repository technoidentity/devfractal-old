import { Simple } from 'devfractal-simple'
import { Text, Title } from 'devfractal-ui-core'
import { FormikActions } from 'formik'
import React from 'react'
import { RouteComponentProps } from 'react-router'
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
      <Simple.Form
        initialValues={{ title: '', done: false }}
        onSubmit={onAddTodo}
      >
        <Simple.Text name="title" placeholder="title" />
        <Simple.Checkbox name="done"> Done</Simple.Checkbox>
        <Simple.FormButtons />
      </Simple.Form>
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

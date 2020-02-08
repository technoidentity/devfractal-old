// tslint:disable typedef
import { Get, Simple, Text } from 'stp-devfractal'
import { FormikHelpers } from 'formik'
import React from 'react'
import { FSTodo, fsTodoAPI } from '../common'

export interface EditTodoViewProps {
  readonly todo: FSTodo
  onEditTodo(todo: FSTodo, actions: FormikHelpers<FSTodo>): void
}

export const FSEditTodoView: React.FC<EditTodoViewProps> = ({
  todo,
  onEditTodo,
}) => (
  <>
    <Simple.Form initialValues={{ ...todo }} onSubmit={onEditTodo}>
      <Simple.Text name="title" />
      <Simple.Checkbox name="done"> Done</Simple.Checkbox>
      <Simple.FormButtons />
    </Simple.Form>
  </>
)

export interface FSEditTodoProps {
  readonly id: string
}

export const FSEditTodo: React.FC<FSEditTodoProps> = ({ id }) => {
  const [err, setErr] = React.useState('')
  const handleEditTodo = async (
    todo: FSTodo,
    actions: FormikHelpers<typeof todo>,
  ) => {
    try {
      await fsTodoAPI.replace(todo.id, todo)
    } catch (err) {
      setErr(err.message)
    } finally {
      actions.setSubmitting(false)
    }
  }

  return (
    <>
      <Text textColor="danger">{err}</Text>
      <Get asyncFn={fsTodoAPI.get} deps={[id]}>
        {data => <FSEditTodoView onEditTodo={handleEditTodo} todo={data} />}
      </Get>
    </>
  )
}

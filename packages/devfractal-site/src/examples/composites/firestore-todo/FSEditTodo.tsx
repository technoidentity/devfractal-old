import { FormikActions } from 'formik'
import React from 'react'
import { Get, Section, Simple } from 'technoidentity-devfractal'
import { FSTodo, one, update } from './todoAPI'

export interface EditTodoViewProps {
  readonly todo: FSTodo
  onEditTodo(todo: FSTodo, actions: FormikActions<FSTodo>): void
}

export const FSEditTodoView: React.SFC<EditTodoViewProps> = ({
  todo,
  onEditTodo,
}) => (
  <Section>
    <Simple.Form initialValues={{ ...todo }} onSubmit={onEditTodo}>
      <Simple.Text name="title" />
      <Simple.Checkbox name="done"> Done</Simple.Checkbox>
      <Simple.FormButtons />
    </Simple.Form>
  </Section>
)

export interface FSEditTodoProps {
  readonly id: string
}

// tslint:disable-next-line: typedef
const handleEditTodo = async (
  todo: FSTodo,
  actions: FormikActions<typeof todo>,
) => {
  console.log('handleEditTodo:', todo)
  await update(todo)
  actions.setSubmitting(false)
}

export const FSEditTodo: React.FC<FSEditTodoProps> = ({ id }) => {
  return (
    <Get asyncFn={one} deps={[id]}>
      {data => <FSEditTodoView onEditTodo={handleEditTodo} todo={data} />}
    </Get>
  )
}

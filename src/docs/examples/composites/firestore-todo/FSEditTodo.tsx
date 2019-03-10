import { FormikActions } from 'formik'
import React from 'react'
import { Async, Section, Simple } from '../../devfractal'
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
    <Async asyncFn={async () => one(id)}>
      {({ isLoading, error, data }) => {
        if (isLoading) {
          return <h1>loading...</h1>
        }
        if (data) {
          return <FSEditTodoView onEditTodo={handleEditTodo} todo={data} />
        }
        return <h1>`${error}`</h1>
      }}
    </Async>
  )
}

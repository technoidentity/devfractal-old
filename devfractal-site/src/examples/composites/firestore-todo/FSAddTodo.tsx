import { FormikActions } from 'formik'
import React from 'react'
import { Omit, Section, Simple, Title } from 'technoidentity-devfractal'
import { create, FSTodo } from './todoAPI'

export interface AddTodoProps {
  onAddTodo(
    todo: Omit<FSTodo, 'id'>,
    actions: FormikActions<Omit<FSTodo, 'id'>>,
  ): void
}

export const FSAddTodoView: React.SFC<AddTodoProps> = ({ onAddTodo }) => {
  return (
    <Section>
      <Title>Add Todo Form</Title>
      <Simple.Form
        initialValues={{ title: '', done: false }}
        onSubmit={onAddTodo}
      >
        <Simple.Text name="title" placeholder="title" />
        <Simple.Checkbox name="done"> Done</Simple.Checkbox>
        <Simple.FormButtons />
      </Simple.Form>
    </Section>
  )
}

export const FSAddTodo: React.FC = () => {
  // tslint:disable-next-line: typedef
  const handleAddTodo = async (
    todo: Omit<FSTodo, 'id'>,
    actions: FormikActions<typeof todo>,
  ) => {
    await create(todo)
    actions.setSubmitting(false)
  }
  return <FSAddTodoView onAddTodo={handleAddTodo} />
}

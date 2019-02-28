import React from 'react'
import { consoleSubmit, required, Section, Simple } from '../../devfractal'

interface TodoFormValues {
  readonly title: string
  readonly completed: boolean
}

const initialTodoFormValues: TodoFormValues = {
  title: '',
  completed: false,
}

export const TodoForm: React.SFC = () => (
  <Section>
    <Simple.Form
      initialValues={initialTodoFormValues}
      onSubmit={consoleSubmit(0)}
    >
      <Simple.Text label="Title" name="title" validations={[required()]} />
      <Simple.Checkbox name="completed">Completed</Simple.Checkbox>
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)

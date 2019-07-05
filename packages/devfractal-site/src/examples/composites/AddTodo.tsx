import React from 'react'
import { consoleSubmit, Section, Simple } from 'technoidentity-devfractal'
import { boolean, object, string } from 'yup'

export interface AddTodoValues {
  readonly title: string
  readonly description: string
  readonly done: boolean
}

export const initialAddTodoValues: AddTodoValues = {
  title: '',
  description: '',
  done: false,
}

export const AddTodoSchema = object({
  title: string().required(),
  description: string().required(),
  done: boolean().required(),
})

export const SimpleAddTodo: React.FC = () => (
  <Section>
    <Simple.Form
      initialValues={initialAddTodoValues}
      // @TODO: remove any
      validationSchema={AddTodoSchema as any}
      onSubmit={consoleSubmit(0)}
    >
      <Simple.Text label="Title:" name="title" />
      <Simple.TextArea label="Description:" name="description" />
      <Simple.Checkbox name="done" />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)

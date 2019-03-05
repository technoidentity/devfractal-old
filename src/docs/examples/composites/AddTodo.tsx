import React from 'react'
import { boolean, object, ObjectSchema, string } from 'yup'
import { consoleSubmit, Section, Simple } from '../devfractal'

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

export const AddTodoSchema: ObjectSchema<AddTodoValues> = object({
  title: string().required(),
  description: string().required(),
  done: boolean().required(),
})

export const SimpleAddTodo: React.FunctionComponent = () => (
  <Section>
    <Simple.Form
      initialValues={initialAddTodoValues}
      validationSchema={AddTodoSchema}
      onSubmit={consoleSubmit(0)}
    >
      <Simple.Text label="Title:" name="title" />
      <Simple.TextArea label="Description:" name="description" />
      <Simple.Checkbox name="done"> Done </Simple.Checkbox>
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)

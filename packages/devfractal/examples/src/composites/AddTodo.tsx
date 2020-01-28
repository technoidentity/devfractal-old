import { Simple } from '@stp/simple'
import { Section } from '@stp/ui-core'
import React from 'react'
import { boolean, object, ObjectSchema, string } from 'yup'

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

export const AddTodoSchema: ObjectSchema<any> = object({
  title: string().required(),
  description: string().required(),
  done: boolean().required(),
})

export const SimpleAddTodo: React.FC = () => (
  <Section>
    <Simple.Form
      initialValues={initialAddTodoValues}
      validationSchema={AddTodoSchema}
    >
      <Simple.Text label="Title:" name="title" />
      <Simple.TextArea label="Description:" name="description" />
      <Simple.Checkbox name="done" />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)

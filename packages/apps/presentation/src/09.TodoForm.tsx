import { FormikHelpers } from 'formik'
import React from 'react'
import { Simple } from 'technoidentity-devfractal'
import { component, Section } from 'technoidentity-devfractal'
import { TypeOf } from 'technoidentity-utils'
import { fn, obj } from 'technoidentity-utils'
import { Todo } from './08.todoAPI'

export const initialValues: Todo = {
  title: '',
  scheduled: new Date(),
  done: false,
}

export const TodoFormProps = obj(
  { initial: Todo },
  {
    onSubmit: fn<
      (values: Todo, actions: FormikHelpers<Todo>) => Promise<void>
    >(),
  },
)
type TodoFormProps = TypeOf<typeof TodoFormProps>

export const TodoForm: React.FC<TodoFormProps> = component(
  TodoFormProps,
  ({ onSubmit, initial }) => (
    <Section>
      <Simple.Form initialValues={initial || initialValues} onSubmit={onSubmit}>
        <Simple.Text name="title" />
        <Simple.Date name="scheduled" />
        <Simple.Checkbox name="done" />
        <Simple.FormButtons />
      </Simple.Form>
    </Section>
  ),
)

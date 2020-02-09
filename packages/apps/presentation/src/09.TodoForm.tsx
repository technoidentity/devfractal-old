import { Simple } from '@stp/devfractal'
import { component, Section } from '@stp/devfractal'
import { TypeOf } from '@stp/utils'
import { fn, obj } from '@stp/utils'
import { FormikHelpers } from 'formik'
import React from 'react'
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

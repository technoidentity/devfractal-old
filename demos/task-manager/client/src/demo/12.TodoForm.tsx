import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { component, formSubmit, Simple } from 'technoidentity-devfractal'
import { fn, props } from 'technoidentity-utils'
import { DatePickerField } from '../common'
import { Todo } from './11.todo'

export const initialValues = {
  title: '',
  scheduled: new Date(),
  done: false,
}

export const TodoFormProps = props(
  { initial: Todo },
  { onSubmit: fn<(values: Todo) => Promise<void>>() },
)

export const TodoForm = component(TodoFormProps, ({ onSubmit, initial }) => (
  <Simple.Form
    initialValues={initialValues || initial}
    onSubmit={formSubmit(onSubmit)}
  >
    <Simple.Text name="title" />
    <DatePickerField name="scheduled" label="Scheduled" />
    <Simple.Checkbox name="done" />
    <Simple.FormButtons />
  </Simple.Form>
))

import { FormikActions } from 'formik'
import React from 'react'
import { Simple } from 'technoidentity-devfractal'

export interface Task {
  readonly title: string
  readonly description: string
  readonly startsOn: Date
  readonly deadline: Date
  readonly completed: Date
  readonly scheduled: Date
}

export interface CreateTaskFormProps {
  onAddTask(task: Task): void
}

const initialValues = {
  title: '',
  description: '',
  startsOn: Date.now(),
  deadline: Date.now(),
  completed: Date.now(),
  scheduled: Date.now(),
}

export const CreateTaskForm: React.SFC<CreateTaskFormProps> = ({
  onAddTask,
}) => {
  return (
    <Simple.Form
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onAddTask(values.task)
        actions.setSubmitting(false)
      }}
    >
      <Simple.Text name="title" />
      <Simple.TextArea label="description" name="description" />
      <Simple.FormButtons />
    </Simple.Form>
  )
}

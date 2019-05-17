import { Field, Form, FormikProps } from 'formik'
import React from 'react'
import { TaskValues } from './TaskForm'

export interface EditTaskFormProps {
  onEditTask(id: string): void
}

 const InnerEditTaskForm: React.FC<FormikProps<TaskValues>> = () => {
  return (
    <Form>
      <Field name="title" type="text" />
      <Field name="description" type="text" />
      <button type="submit">Submit</button>
    </Form>
  )
}


export

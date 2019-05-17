import { Field, Form, Formik, FormikActions, FormikProps } from 'formik'
import React from 'react'

export interface TaskValues {
  readonly title: string
  readonly description: string
}

const InnerCreateTaskForm: React.FC<FormikProps<TaskValues>> = () => {
  return (
    <Form>
      <label>Title</label>
      <Field type="text" name="title" />
      <br />
      <label>Description</label>
      <Field type="text" name="description" />
      <br />
      <button type="submit">Creat</button>
    </Form>
  )
}

export interface TaskFormProps {
  readonly initial?: TaskValues
  onCreate(values: TaskValues): void
}

const initialValues: TaskValues = { title: '', description: '' }

export const TaskForm: React.FC<TaskFormProps> = ({ onCreate, initial }) => {
  return (
    <Formik
      initialValues={initial || initialValues}
      onSubmit={(values, actions) => {
        onCreate(values)
        actions.setSubmitting(false)
      }}
      render={InnerCreateTaskForm}
    />
  )
}

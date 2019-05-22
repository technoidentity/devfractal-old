import { Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export interface TaskValues {
  readonly title: string
  readonly description: string
}
export const InnerTaskForm: React.FC<FormikProps<TaskValues>> = () => {
  const [select, setSelect] = React.useState(new Date())
  return (
    <Form>
      <label>Title</label>
      <Field type="text" name="title" />
      <br />
      <label>Description</label>
      <Field type="text" name="description" />
      <br />
      <label>startsOn</label>
      <DatePicker selected={select} onChange={setSelect} />
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
      component={InnerTaskForm}
      onSubmit={(values, actions) => {
        onCreate(values)
        actions.setSubmitting(false)
      }}
    />
  )
}

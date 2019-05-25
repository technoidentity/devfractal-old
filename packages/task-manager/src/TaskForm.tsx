import { Field, FieldProps, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const FormikDatePicker: React.FC<FieldProps> = ({ field, form }) => {
  const handleChange = (date: Date) => {
    form.setFieldValue(field.name, date)
  }
  return (
    <DatePicker {...field} selected={field.value} onChange={handleChange} />
  )
}
export interface TaskValues {
  readonly title: string
  readonly description: string
  readonly startsOn: Date | undefined
  readonly deadLine: Date | undefined
  readonly scheduled: Date | undefined
}

export const InnerTaskForm: React.FC<FormikProps<TaskValues>> = () => {
  return (
    <Form>
      <h1>Creat Task</h1>
      <label>Title</label>
      <Field type="text" name="title" />
      <br />
      <label>Description</label>
      <Field type="text" name="description" />
      <br />
      <label>StartsOn</label>
      <Field name="startsOn" component={FormikDatePicker} />
      <br />
      <label>Deadline</label>
      <Field name="deadLine" component={FormikDatePicker} />
      <br />
      <label>Scheduled</label>
      <Field name="scheduled" component={FormikDatePicker} />
      <br />
      <button type="submit">Creat</button>
    </Form>
  )
}

export interface TaskFormProps {
  readonly initial?: TaskValues
  onCreate(values: TaskValues): void
}

const initialValues: TaskValues = {
  title: '',
  description: '',
  startsOn: undefined,
  deadLine: undefined,
  scheduled: undefined,
}

export const TaskForm: React.FC<TaskFormProps> = ({ onCreate, initial }) => {
  return (
    <Formik
      initialValues={initial || initialValues}
      component={InnerTaskForm}
      onSubmit={(values, actions) => {
        console.log(values)
        onCreate(values)
        actions.setSubmitting(false)
      }}
    />
  )
}

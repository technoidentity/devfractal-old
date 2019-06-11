import 'bulma/css/bulma.css'
import { Field, FieldProps, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ErrorField, Section } from 'technoidentity-devfractal'
import * as Yup from 'yup'

const FormikDatePicker: React.FC<FieldProps> = ({ field, form }) => {
  const handleChange = (date: Date) => {
    form.setFieldValue(field.name, date)
  }
  return (
    <div className="control">
      <DatePicker
        {...field}
        selected={field.value}
        onChange={handleChange}
        className="input"
      />
    </div>
  )
}
export interface TaskValues {
  readonly title: string
  readonly description: string
  readonly dateInfo: {
    readonly started: Date | undefined
    readonly deadline: Date | undefined
    readonly completed: Date | undefined
    readonly scheduled: Date | undefined
  }
}

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required()
    .min(5)
    .max(100),
  description: Yup.string()
    .required()
    .min(10)
    .max(200),
  dateInfo: Yup.object().shape({
    started: Yup.date().required(),
    deadline: Yup.date().required(),
    scheduled: Yup.date().required(),
    completed: Yup.date(),
  }),
})

export const InnerTaskForm: React.FC<FormikProps<TaskValues>> = () => {
  return (
    <Section>
      <Form>
        <h1 className="title has-text-centered">Creat Task</h1>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <Field
              type="text"
              name="title"
              className="input "
              placeholder="Title"
            />
          </div>
          <div className="help is-danger">
            <ErrorField name="title" />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <Field
              type="text"
              name="description"
              className="input "
              placeholder="Description"
            />
          </div>
          <div className="help is-danger">
            <ErrorField name="description" />
          </div>
        </div>

        <div className="field">
          <label className="label">Started</label>
          <div className="control">
            <Field
              type="text"
              name="dateInfo.started"
              className="input "
              component={FormikDatePicker}
            />
          </div>
          <div className="help is-danger">
            <ErrorField name="dateInfo.started" />
          </div>
        </div>

        <div className="field">
          <label className="label">Deadline</label>
          <div className="control">
            <Field
              type="text"
              name="dateInfo.deadline"
              className="input"
              component={FormikDatePicker}
            />
          </div>
          <div className="help is-danger">
            <ErrorField name="dateInfo.deadline" />
          </div>
        </div>

        <div className="field">
          <label className="label">Scheduled</label>
          <div className="control">
            <Field
              type="text"
              name="dateInfo.scheduled"
              className="input "
              component={FormikDatePicker}
            />
          </div>
          <div className="help is-danger">
            <ErrorField name="dateInfo.scheduled" />
          </div>
        </div>
        <div className="field">
          <label className="label">Completed</label>
          <div className="control">
            <Field
              type="text"
              name="dateInfo.completed"
              className="input"
              component={FormikDatePicker}
            />
          </div>
          <div className="help is-danger">
            <ErrorField name="dateInfo.completed" />
          </div>
        </div>

        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <button className="button is-primary" type="submit">
              Create
            </button>
          </p>
          <p className="control">
            <button className="button is-info" type="reset">
              Reset
            </button>
          </p>
        </div>
      </Form>
    </Section>
  )
}

export interface TaskFormProps {
  readonly initial?: TaskValues
  onCreate(values: TaskValues): void
}

const initialValues: TaskValues = {
  title: '',
  description: '',
  dateInfo: {
    started: undefined,
    deadline: undefined,
    scheduled: undefined,
    completed: undefined,
  },
}

export const TaskForm: React.FC<TaskFormProps> = ({ onCreate, initial }) => {
  return (
    <Formik
      initialValues={initial || initialValues}
      validationSchema={validationSchema}
      component={InnerTaskForm}
      onSubmit={(values, actions) => {
        console.log(values)
        onCreate(values)
        actions.setSubmitting(false)
      }}
    />
  )
}

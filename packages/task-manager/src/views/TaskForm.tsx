import 'bulma/css/bulma.css'
import { format } from 'date-fns'
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { ErrorField, Section } from 'technoidentity-devfractal'
import * as yup from 'yup'
import { DatePickerField, formSubmit, Task } from '../utils'

const currentDate = format(new Date(), 'YYYY-MM-DD')

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required()
    .min(5)
    .max(100),

  description: yup
    .string()
    .required()
    .min(10)
    .max(200),

  dateInfo: yup.object().shape({
    started: yup
      .date()
      .min(
        currentDate,
        'started date should be greater than or equal to current date',
      ),

    deadline: yup
      .date()
      .required()
      .when('scheduled', (scheduled: Date, schema: yup.DateSchema) => {
        return schema.min(
          scheduled,
          'deadline date should be greater than scheduled date',
        )
      }),

    scheduled: yup
      .date()
      .required()
      .when('started', (started: Date, schema: yup.DateSchema) => {
        return schema.min(
          started,
          'scheduled date should be greater than started date',
        )
      }),

    completed: yup
      .date()
      .when('started', (started: Date, schema: yup.DateSchema) => {
        return schema.min(started, 'deadline should be greater than started')
      }),
  }),
})

export const InnerTaskForm: React.FC<FormikProps<Task>> = () => (
  <Section>
    <Form>
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
          <ErrorMessage name="title" />
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

      <DatePickerField label="Started" name="dateInfo.started" />
      <DatePickerField label="Deadline" name="dateInfo.deadline" />
      <DatePickerField label="Scheduled" name="dateInfo.scheduled" />
      <DatePickerField label="Completed" name="dateInfo.completed" />

      <div className="field is-grouped is-grouped-centered">
        <p className="control">
          <button className="button is-primary" type="submit">
            Submit
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

export interface TaskFormProps {
  readonly initial?: Task
  onSubmit(values: Task): Promise<void>
}

const initialValues: Task = {
  title: '',
  description: '',
  dateInfo: {
    deadline: new Date(),
    scheduled: new Date(),
    started: undefined,
    completed: undefined,
  },
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initial }) => (
  <Formik
    initialValues={initial || initialValues}
    validationSchema={validationSchema}
    component={InnerTaskForm}
    onSubmit={formSubmit(onSubmit)}
  />
)

import 'bulma/css/bulma.css'
import { format } from 'date-fns'
import { TypeOf } from 'io-ts'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {
  Column,
  Columns,
  component,
  formSubmit,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import { fn, props } from 'technoidentity-utils'
import * as yup from 'yup'
import { DatePickerField, Task } from '../common'

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
        return schema.min(
          started,
          'completed date should be greater than started',
        )
      }),
  }),
})

export const TaskFormProps = props(
  { initial: Task },
  { onSubmit: fn<(values: Task) => Promise<void>>() },
)

export type TaskFormProps = TypeOf<typeof TaskFormProps>

// @TODO: replace with emptyFromType
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

export const TaskForm: React.FC<TaskFormProps> = component(
  TaskFormProps,
  ({ onSubmit, initial }) => (
    <Section>
      <Simple.Form
        initialValues={initial || initialValues}
        validationSchema={validationSchema}
        onSubmit={formSubmit(onSubmit)}
      >
        <Columns columnCentered>
          <Column size="half">
            <Simple.Text name="title" />
            <Simple.TextArea name="description" />
            <DatePickerField label="Started" name="dateInfo.started" />
            <DatePickerField label="Deadline" name="dateInfo.deadline" />
            <DatePickerField label="Scheduled" name="dateInfo.scheduled" />
            <DatePickerField label="Completed" name="dateInfo.completed" />
            <Simple.FormButtons />
          </Column>
        </Columns>
      </Simple.Form>
    </Section>
  ),
)

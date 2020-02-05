import { DateField } from '@stp/forms'
import { Simple } from '@stp/simple'
import { Column, Columns, Section } from '@stp/ui'
import { component } from '@stp/core'
import { empty, fn, obj } from '@stp/utils'
import { format } from 'date-fns'
import { FormikHelpers } from 'formik'
import { produce } from 'immer'
import React from 'react'
import * as yup from 'yup'
import { Task } from '../common'

const currentDate = format(new Date(), 'yyyy-MM-dd')

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

export const TaskFormProps = obj(
  { initial: Task },
  {
    onSubmit: fn<
      (values: Task, actions: FormikHelpers<Task>) => Promise<void>
    >(),
  },
)

const initialValues: Task = produce(empty(Task), draft => {
  draft._id = undefined
  draft.dateInfo.completed = undefined
  draft.dateInfo.started = undefined
})

export const TaskForm = component(TaskFormProps, ({ onSubmit, initial }) => (
  <Section>
    <Simple.Form
      initialValues={initial || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Columns columnCentered>
        <Column size="half">
          <Simple.Text name="title" />
          <Simple.TextArea name="description" />
          <DateField name="dateInfo.scheduled" />
          <DateField name="dateInfo.deadline" />
          <DateField name="dateInfo.started" />
          <DateField name="dateInfo.completed" />
          <Simple.FormButtons />
        </Column>
      </Columns>
    </Simple.Form>
  </Section>
))

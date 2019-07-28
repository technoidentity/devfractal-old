import { compareAsc, format, startOfDay } from 'date-fns'
import { string, TypeOf, union } from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { DateFromISOString } from 'io-ts-types/lib/DateFromISOString'
import { Document, model, Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
import { props } from 'technoidentity-utils'

const ISODate = union([date, DateFromISOString])

const dateSchema = new Schema({
  started: { type: Date },
  deadline: { type: Date, required: true },
  completed: { type: Date },
  scheduled: { type: Date, required: true },
})

const dateInfo = props(
  { started: ISODate, completed: ISODate },
  { scheduled: ISODate, deadline: ISODate },
)

export const Task = props(
  { _id: string },
  { title: string, description: string, dateInfo },
)

export type Task = TypeOf<typeof Task> & Document

const currentDate: Date | string = format(new Date(), 'YYYY-MM-DD')

const deadlineValidator = (value: Task['dateInfo']): boolean => {
  if (value.started === undefined) {
    return true
  }
  return compareAsc(startOfDay(value.deadline), startOfDay(value.started)) >= 0
}

const deadlineValidator2 = (value: Task['dateInfo']): boolean => {
  return (
    compareAsc(startOfDay(value.deadline), startOfDay(value.scheduled)) >= 0
  )
}

const completedValidator = (value: Task['dateInfo']): boolean => {
  if (value.completed === undefined || value.started === undefined) {
    return true
  }
  return compareAsc(startOfDay(value.completed), startOfDay(value.started)) >= 0
}

const startedValidator = (value: Task['dateInfo']): boolean => {
  if (value.started === undefined) {
    return true
  }
  return compareAsc(startOfDay(value.started), startOfDay(currentDate)) >= 0
}

const scheduledValidator4 = (value: Task['dateInfo']): boolean => {
  if (value.started === undefined) {
    return true
  }
  return compareAsc(startOfDay(value.scheduled), startOfDay(value.started)) >= 0
}

const taskSchema = new Schema<Task>(
  {
    title: { type: String, required: true, minlength: 5, maxlength: 100 },
    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 200,
    },
    dateInfo: {
      type: dateSchema,
      required: true,
      validate: [
        {
          validator: deadlineValidator,
          msg: 'deadline date should be greater than started date',
        },
        {
          validator: deadlineValidator2,
          msg: 'completed date should be greater than scheduled date',
        },
        {
          validator: completedValidator,
          msg: 'completed date should be greater than started date',
        },
        {
          validator: startedValidator,
          msg: 'started date should be equal to or greater than current date',
        },
        {
          validator: scheduledValidator4,
          msg: 'scheduled date should be equal to or greater than started date',
        },
      ],
    },
  },
  {
    strict: 'throw',
    useNestedStrict: true,
  },
)

taskSchema.plugin(mongoosePaginate)

export const TaskModel = model<Task>('Task', taskSchema)

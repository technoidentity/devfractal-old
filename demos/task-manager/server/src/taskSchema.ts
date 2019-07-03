import { compareAsc, format, startOfDay } from 'date-fns'
import { Document, model, Schema } from 'mongoose'

const dateSchema = new Schema({
  started: { type: Date, required: true },
  deadline: { type: Date, required: true },
  completed: { type: Date },
  scheduled: { type: Date, required: true },
})

export interface Task extends Document {
  title: string
  description: string
  dateInfo: {
    started: Date
    deadline: Date
    completed?: Date
    scheduled: Date
  }
}

const currentDate: Date | string = format(new Date(), 'YYYY-MM-DD')

const deadlineValidator = (value: Task['dateInfo']): boolean => {
  return compareAsc(startOfDay(value.deadline), startOfDay(value.started)) >= 0
}

const deadlineValidator2 = (value: Task['dateInfo']): boolean => {
  return (
    compareAsc(startOfDay(value.deadline), startOfDay(value.scheduled)) >= 0
  )
}

const completedValidator = (value: Task['dateInfo']): boolean => {
  if (value.completed === undefined) {
    return true
  }
  return compareAsc(startOfDay(value.completed), startOfDay(value.started)) >= 0
}

const startedValidator = (value: Task['dateInfo']): boolean => {
  return compareAsc(startOfDay(value.started), startOfDay(currentDate)) >= 0
}

const scheduledValidator4 = (value: Task['dateInfo']): boolean => {
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

export const TaskModel = model<Task>('Task', taskSchema)

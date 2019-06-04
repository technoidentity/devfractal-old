import { compareAsc } from 'date-fns'
import * as mongoose from 'mongoose'

const dateSchema = new mongoose.Schema({
  started: { type: Date, required: true },
  deadline: { type: Date, required: true },
  completed: { type: Date, required: true },
  scheduled: { type: Date, required: true },
})

export interface ITask extends mongoose.Document {
  readonly title: string
  readonly description: string
  readonly dateInfo: {
    readonly started: Date
    readonly deadline: Date
    readonly completed: Date
    readonly scheduled: Date
  }
}

const currentDate: Date = new Date()

const deadlineValidator = (value: ITask['dateInfo']): boolean => {
  return compareAsc(value.deadline, value.started) >= 0
}

const deadlineValidator2 = (value: ITask['dateInfo']): boolean => {
  return compareAsc(value.deadline, value.scheduled) >= 0
}

const completedValidator = (value: ITask['dateInfo']): boolean => {
  return compareAsc(value.completed, value.started) >= 0
}

const startedValidator = (value: ITask['dateInfo']): boolean => {
  return compareAsc(value.started, currentDate) >= 0
}

const scheduledValidator4 = (value: ITask['dateInfo']): boolean => {
  return compareAsc(value.scheduled, value.started) >= 0
}

const taskSchema = new mongoose.Schema<ITask>(
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

export const Task = mongoose.model<ITask>('Task', taskSchema)

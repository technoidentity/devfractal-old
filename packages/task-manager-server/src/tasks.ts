import { addDays, compareAsc } from 'date-fns'
import * as mongoose from 'mongoose'

const dateSchema = {
  started: { type: Date },
  deadline: { type: Date },
  completed: { type: Date },
  scheduled: { type: Date },
}
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
const dateValidator = (value: ITask['dateInfo']): boolean => {
  return compareAsc(value.deadline, value.started) >= 0
}

const dateValidator1 = (value: ITask['dateInfo']): boolean => {
  return compareAsc(value.deadline, value.scheduled) >= 0
}

const dateValidator2 = (value: ITask['dateInfo']): boolean => {
  return compareAsc(value.completed, value.started) >= 0
}

const dateValidator3 = (value: ITask['dateInfo']): boolean => {
  return compareAsc(value.started, currentDate) >= 0
}

const dateValidator4 = (value: ITask['dateInfo']): boolean => {
  return compareAsc(value.scheduled, value.started) >= 0
}

const taskSchema = new mongoose.Schema<ITask>({
  title: { type: String, required: true, minlength: 5, maxlength: 100 },
  description: { type: String, required: true, minlength: 10, maxlength: 200 },
  dateInfo: {
    type: dateSchema,
    validate: [
      {
        validator: dateValidator,
        msg: 'deadline date should be after StartsOn date',
      },
      {
        validator: dateValidator1,
        msg: 'completed date should be after scheduled date',
      },
      {
        validator: dateValidator2,
        msg: 'completed date should be after StartsOn date',
      },
      {
        validator: dateValidator3,
        msg: 'date should be equal to or greater than current date',
      },
      {
        validator: dateValidator4,
        msg: 'date should be equal to or greater than StartsOn date',
      },
    ],
  },
})

const Task = mongoose.model<ITask>('Task', taskSchema)

export const task1 = new Task({
  title: 'zgsdghjs',
  description: 'JHEdkiw nzdfhsid jszfhdi',
  dateInfo: {
    started: currentDate,
    deadline: addDays(currentDate, 15),
    completed: addDays(currentDate, 10),
    scheduled: addDays(currentDate, 4),
  },
})

const error = task1.validateSync()

console.log(error)

export default Task

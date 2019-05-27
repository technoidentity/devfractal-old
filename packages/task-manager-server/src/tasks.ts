import * as mongoose from 'mongoose'
import { addDays } from 'date-fns'
export interface ITask extends mongoose.Document {
  readonly title: string
  readonly description: string
  readonly startsOn: Date
  readonly deadline: Date
  readonly completed: Date
  readonly scheduled: Date
}

const dateSchema = {
  startsOn: { type: Date },
  deadline: { type: Date },
  completed: { type: Date },
  scheduled: { type: Date },
}

const dateValidator = (value: typeof dateSchema) => {
  return value.startsOn < value.deadline
}

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 5, maxlength: 100 },
  description: { type: String, required: true, minlength: 10, maxlength: 200 },
  dateInfo: {
    type: dateSchema,
    validate: {
      validator: dateValidator,
      msg: 'date should be greater than startsOn',
    },
  },
})

const Task = mongoose.model<ITask>('Task', taskSchema)

export const task1 = new Task({
  title: 'zgsdghjs',
  description: 'JHEdkiw nzdfhsid jszfhdi',
  dateInfo: {
    startsOn: addDays(new Date(), 10),
    deadline: new Date(),
    completed: new Date(),
    scheduled: new Date(),
  },
})

const error = task1.validateSync()

console.log(error)

export default Task

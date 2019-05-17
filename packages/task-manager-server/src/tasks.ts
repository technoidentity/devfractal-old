import * as mongoose from 'mongoose'

export interface ITask extends mongoose.Document {
  readonly title: string
  readonly description: string
  readonly startsOn: Date
  readonly deadline: Date
  readonly completed: Date
  readonly scheduled: Date
}

const taskSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  startsOn: { type: Date },
  deadline: { type: Date },
  completed: { type: Date },
  scheduled: { type: Date },
})

const Task = mongoose.model<ITask>('Task', taskSchema)

export default Task

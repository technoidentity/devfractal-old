import {
  ISODate,
  keyof,
  obj,
  req,
  StrID,
  string,
  TypeOf,
} from 'technoidentity-utils'

const dateInfo = obj(
  { started: ISODate, completed: ISODate },
  { deadline: ISODate, scheduled: ISODate },
)

export const Task = obj(
  { _id: StrID }, // _id is optional, for create
  { title: string, description: string, dateInfo },
)
export type Task = TypeOf<typeof Task>

export const User = req({
  id: StrID,
  name: string,
  email: string,
  password: string,
})
export type User = TypeOf<typeof User>

export const Session = req({
  id: StrID,
  name: string,
  password: string,
})
export type Session = TypeOf<typeof Session>

export const TaskFilter = keyof({
  all: true,
  completed: true,
  pending: true,
  today: true,
  deadline: true,
})
export type TaskFilter = TypeOf<typeof TaskFilter>

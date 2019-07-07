import { keyof, string, TypeOf, union } from 'io-ts'
import { date, DateFromISOString } from 'io-ts-types'
import { props, req } from 'technoidentity-utils'

const ISODate = union([date, DateFromISOString])

const dateInfo = props(
  { started: ISODate, completed: ISODate },
  { deadline: ISODate, scheduled: ISODate },
)

export const Task = props(
  { _id: string }, // _id is optional, for create
  { title: string, description: string, dateInfo },
)
export type Task = TypeOf<typeof Task>

export const User = req({ name: string, email: string, password: string })
export type User = TypeOf<typeof User>

export const Session = req({
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
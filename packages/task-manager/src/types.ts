import { intersection, string, TypeOf, union } from 'io-ts'
import { date, DateFromISOString } from 'io-ts-types'
import { opt, req } from 'technoidentity-devfractal'

const ISODate = union([date, DateFromISOString])

const dateInfoRequired = req({ deadline: ISODate, scheduled: ISODate })
const dateInfoPartial = opt({ started: ISODate, completed: ISODate })
const dateInfo = intersection([dateInfoRequired, dateInfoPartial])

const taskPartial = opt({ _id: string })
const taskRequired = req({ title: string, description: string, dateInfo })
export const TaskRT = intersection([taskPartial, taskRequired])

export type Task = TypeOf<typeof TaskRT>

export const userRT = req({
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
})

export type User = TypeOf<typeof userRT>

import axios from 'axios'
import * as t from 'io-ts'
import * as tpromise from 'io-ts-promise'
import { DateFromISOString } from 'io-ts-types'

// export interface TaskValues {
//   readonly _id?: string
//   readonly title: string
//   readonly description: string
//   readonly dateInfo: {
//     readonly started?: Date
//     readonly deadline: Date
//     readonly completed?: Date
//     readonly scheduled: Date
//   }
// }

export const dateInfoReq = t.type({
  deadline: DateFromISOString,
  scheduled: DateFromISOString,
})

export const dateInfoPartial = t.partial({
  started: DateFromISOString,
  completed: DateFromISOString,
})

export const taskPartial = t.partial({
  _id: t.string,
})

export const taskReq = t.type({
  title: t.string,
  description: t.string,
  dateInfo: t.intersection([dateInfoReq, dateInfoPartial]),
})

const Task = t.intersection([taskPartial, taskReq])
export type TaskValues = t.TypeOf<typeof Task>

export const getOneTask = () => {
  axios
    .get('http://localhost:9999/tasks/5cf4c3fe67fe360ff25b2014')
    .then(res => tpromise.decode(Task, res.data))
    .then(typeSafeData =>
      console.log(
        `${typeSafeData.title} which is scheduled on ${typeSafeData.dateInfo.scheduled}`,
      ),
    )
    .catch(err => console.log(err))
}

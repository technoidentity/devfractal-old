import axios from 'axios'
import * as t from 'io-ts'
import * as tp from 'io-ts-promise'
import { DateFromISOString } from 'io-ts-types'

export const dateInfoReq = t.type({
  deadline: DateFromISOString,
  scheduled: DateFromISOString,
})

export const dateInfoPartial = t.readonly(
  t.partial({
    started: DateFromISOString,
    completed: DateFromISOString,
  }),
)

export const taskPartial = t.readonly(
  t.partial({
    _id: t.string,
  }),
)

export const taskReq = t.readonly(
  t.type({
    title: t.string,
    description: t.string,
    dateInfo: t.intersection([dateInfoReq, dateInfoPartial]),
  }),
)

export const TaskRT = t.intersection([taskPartial, taskReq])
export type Task = t.TypeOf<typeof TaskRT>

export const getOneTask = () => {
  axios
    .get('http://localhost:9999/tasks/5cf4c3fe67fe360ff25b2014')
    .then(res => tp.decode(TaskRT, res.data))
    .then(typeSafeData =>
      console.log(
        `${typeSafeData.title} which is scheduled on ${typeSafeData.dateInfo.scheduled}`,
      ),
    )
    .catch(err => console.log(err))
}

export const getAllTasks = () => {
  axios
    .get('http://localhost:9999/tasks')
    .then(res => tp.decode(TaskRT, res.data))
    .then(typeSafeData => console.log(typeSafeData))
    .catch(err => console.log(err.message))
}

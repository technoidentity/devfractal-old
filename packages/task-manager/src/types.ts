import { intersection, string, TypeOf, union } from 'io-ts'
import { date, DateFromISOString } from 'io-ts-types'
import { opt, req } from 'technoidentity-devfractal'

const ISODate = union([date, DateFromISOString])

const dateInfoRequired = req({
  deadline: ISODate,
  scheduled: ISODate,
})

const dateInfoPartial = opt({
  started: ISODate,
  completed: ISODate,
})

const taskPartial = opt({ _id: string })

const taskRequired = req({
  title: string,
  description: string,
  dateInfo: intersection([dateInfoRequired, dateInfoPartial]),
})

export const TaskRT = intersection([taskPartial, taskRequired])

export type Task = TypeOf<typeof TaskRT>

export const userRT = req({
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
})

export type User = TypeOf<typeof userRT>

// export const getOneTask = () =>
//   axios
//     .get('http://localhost:9999/tasks/5cf4c3fe67fe360ff25b2014')
//     .then(res => tp.decode(TaskRT, res.data))
//     .then(data =>
//       console.log(
//         `${data.title} which is scheduled on ${data.dateInfo.scheduled}`,
//       ),
//     )
//     .catch(err => console.log(err))

// export const getAllTasks = () =>
//   axios
//     .get('http://localhost:9999/tasks')
//     .then(res => tp.decode(TaskRT, res.data))
//     .then(typeSafeData => console.log(typeSafeData))
//     .catch(err => console.log(err.message))

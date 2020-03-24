import {
  boolean,
  date,
  NumID,
  one,
  req,
  StrID,
  string,
} from 'technoidentity-utils'
import { startFakeJSONServer } from './fakeServer'

const User = req(
  {
    id: StrID,
    name: string,
    male: boolean,
    dateOfBirth: date,
  },
  'User',
)

const Todo = req(
  {
    id: NumID,
    title: string,
    done: boolean,
    user: one(User),
  },
  'Todo',
)

// interface User {
//   readonly id: TypeOf<typeof StrID>
//   readonly name: string
//   readonly male: boolean
//   readonly dateOfBirth: Date
//   readonly todos: readonly Todo[]
// }

// interface Todo {
//   readonly id: TypeOf<typeof NumID>
//   readonly title: string
//   readonly done: boolean
//   readonly user: User
// }

// const User: Type<User> = rec(() =>
//   req(
//     {
//       id: StrID,
//       name: string,
//       male: boolean,
//       dateOfBirth: date,
//       todos: many(Todo),
//     },
//     'User',
//   ),
// )

// const Todo: Type<Todo> = rec(() =>
//   req(
//     {
//       id: NumID,
//       title: string,
//       done: boolean,
//       user: one(User),
//     },
//     'Todo',
//   ),
// )

startFakeJSONServer([
  { count: 10, spec: Todo },
  { count: 10, spec: User },
])

import {
  boolean,
  date,
  model,
  NumID,
  obj,
  StrID,
  string,
  TypeOf,
} from 'srtp-utils'
import { startFakeJSONServer } from './fakeServer'

const User = obj(
  { dateOfBirth: date },
  { id: StrID, name: string, male: boolean },
  'User',
)

const Todo = obj({ done: boolean }, { id: NumID, title: string }, 'Todo')

export const TodoModel = model({ plain: Todo, one: { user: User } })
export const UserModel = model({ plain: User, many: { todos: Todo } })

export interface UserModel extends TypeOf<typeof UserModel> {}
export interface TodoModel extends TypeOf<typeof TodoModel> {}

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

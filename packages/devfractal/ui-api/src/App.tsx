// import { rest, SubmitAction } from '@stp/api'
// import { Title } from '@stp/ui'
// import { number, string, TypeOf } from '@stp/utils'
import React from 'react'
// import { ISODate, props } from '@stp/utils'
// import { Post } from './Post'

// // tslint:disable typedef

// export const Todo = props({ id: number }, { title: string, scheduled: ISODate })

// type Todo = TypeOf<typeof Todo>

// interface TodoFormProps {
//   readonly initial?: Todo
//   readonly onSubmit: SubmitAction<Todo>
// }

// const TodoForm: React.FC<TodoFormProps> = ({}) => (
//   <Title textAlignment="centered">Create/Update Todo</Title>
// )

// const todoAPI = rest(Todo, 'id', {
//   resource: 'todos',
//   baseURL: 'http://localhost:9999',
// })

// export const App = () => (
//   // tslint:disable-next-line: no-unbound-method
//   <Post onPost={todoAPI.create} redirectTo="/" component={TodoForm} />
// )

export const App: React.FC = () => <h1>Hello</h1>

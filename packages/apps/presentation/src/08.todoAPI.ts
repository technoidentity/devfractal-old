import { rest } from 'technoidentity-devfractal'
import {
  boolean,
  ISODate,
  NumID,
  obj,
  string,
  TypeOf,
} from 'technoidentity-utils'

export const Todo = obj(
  { id: NumID },
  {
    title: string,
    scheduled: ISODate,
    done: boolean,
  },
)

export type Todo = TypeOf<typeof Todo>

export const todoApi = rest(Todo, ({ id }) => `${id}`, 'todos', {
  baseURL: 'http://localhost:3000',
})

export const checkApi = async () => {
  const one = await todoApi.get({ id: 2 })
  console.log(one)

  const postTodo = await todoApi.create({
    title: 'do programming',
    scheduled: new Date('2019-07-07T07:39:53.863Z'),
    done: false,
  })
  console.log(postTodo)

  const putTodo = await todoApi.update(
    { id: 1 },
    {
      id: 1,
      title: 'bring cupcake',
      done: false,
      scheduled: new Date('2019-07-07T07:39:53.863Z'),
    },
  )
  console.log(putTodo)

  await todoApi.del({ id: postTodo.id || 2 })

  const todos = await todoApi.many()
  console.log(todos)
}

// checkApi()
//   .then(() => console.log('DONE'))
//   .catch(err => console.log(err.message))

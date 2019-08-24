import { boolean, number, string, TypeOf, union } from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { DateFromISOString } from 'io-ts-types/lib/DateFromISOString'
import { rest } from 'technoidentity-devfractal'
import { props } from 'technoidentity-utils'

const ISODate = union([date, DateFromISOString])

export const Todo = props(
  {
    id: number,
  },
  {
    title: string,
    scheduled: ISODate,
    done: boolean,
  },
)

export type Todo = TypeOf<typeof Todo>

export const todoApi = rest(Todo, 'id', {
  baseURL: 'http://localhost:3000',
  resource: 'todos',
})

export const checkApi = async () => {
  const one = await todoApi.get(2)
  console.log(one)

  const postTodo = await todoApi.create({
    title: 'do programming',
    scheduled: '2019-07-07T07:39:53.863Z',
    done: false,
  })
  console.log(postTodo)

  const putTodo = await todoApi.update(1, {
    id: 1,
    title: 'bring cupcake',
    done: false,
    scheduled: '2019-07-07T07:39:53.863Z',
  })
  console.log(putTodo)

  await todoApi.del(postTodo.id || 2)

  const todos = await todoApi.many()
  console.log(todos)
}

// checkApi()
//   .then(() => console.log('DONE'))
//   .catch(err => console.log(err.message))

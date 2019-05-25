import axios from 'axios'
import React from 'react'
import { Async } from 'technoidentity-devfractal'
import { User } from './SignIn'
import { TaskValues } from './TaskForm'
import { TaskList } from './TaskList'

// const task = {
//   title: 'gfaiu',
//   description: 'ajgsdAOAIS',
//   startsOn: Date.now(),
//   deadline: Date.now(),
//   completed: Date.now(),
//   scheduled: Date.now(),
// }

const getData = async () => {
  const result = await axios.get('http://localhost:3000/tasks')
  return result.data
}

const postData = (data: TaskValues) => {
  axios
    .post('http://localhost:3000/tasks', data)
    .then(res => console.log(res.data, new Date(res.data.startsOn)))
    .catch(err => console.log(err))
}

// const updateData = () => {
//   axios
//     .put('http://localhost:3000/tasks/5cdea4ef179562164bdbee0f', {
//       title: 'learn sass',
//       description: 'best tool for web design',
//     })
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))
// }
// updateData()

const taskList: ReadonlyArray<any> = [
  {
    title: 'hsgd',
    description: 'jshu',
    startsOn: new Date(),
    deadLine: new Date(),
    scheduled: new Date(),
  },
  {
    title: 'xkjdfh',
    description: 'jshu',
    startsOn: new Date(),
    deadLine: new Date(),
    scheduled: new Date(),
  },
  {
    title: 'zjuesa',
    description: 'jshu',
    startsOn: new Date(),
    deadLine: new Date(),
    scheduled: new Date(),
  },
]

const postUser = (data: User) => {
  axios
    .post('http://localhost:3000/users', data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}

export const App = () => {
  return (
    <Async asyncFn={getData}>
      {({ error, data }) => {
        if (error) {
          return <h1>error...</h1>
        } else if (data) {
          return <TaskList taskList={data} />
        } else {
          return <h1>is Loading....</h1>
        }
      }}
    </Async>
  )
}

import axios from 'axios'
import React from 'react'
import { TaskForm, TaskValues } from './TaskForm'

// const task = {
//   title: 'gfaiu',
//   description: 'ajgsdAOAIS',
//   startsOn: Date.now(),
//   deadline: Date.now(),
//   completed: Date.now(),
//   scheduled: Date.now(),
// }

// const getData = () => {
//   axios
//     .get('http://localhost:3000/tasks')
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))
// }

// const postData = (data: TaskValues) => {
//   axios
//     .post('http://localhost:3000/tasks', data)
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))
// }

const updateData = () => {
  axios
    .put('http://localhost:3000/tasks/5cdea4ef179562164bdbee0f', {
      title: 'learn sass',
      description: 'best tool for web design',
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}
updateData()

export const App = () => <h1>hello</h1>

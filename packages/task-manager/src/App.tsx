import axios from 'axios'
import React from 'react'
import { User } from './SignIn'
import { SignUpForm } from './SignUp'
import { TaskValues } from './TaskForm'

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

const postData = (data: TaskValues) => {
  axios
    .post('http://localhost:3000/tasks', data)
    .then(res => console.log(res.data))
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

const postUser = (data: User) => {
  axios
    .post('http://localhost:3000/users', data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}

export const App = () => <SignUpForm onUserSubmit={postUser} />

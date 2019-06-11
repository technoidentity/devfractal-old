import axios from 'axios'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
} from 'react-router-dom'
import { User } from './SignIn'
import { TaskForm, TaskValues } from './TaskForm'
import { TaskList } from './TaskList'

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
    .post('http://localhost:9999/users', data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}

// export const App = () => {
//   return (
//     <Async asyncFn={getData}>
//       {({ error, data }) => {
//         if (error) {
//           return <h1>error...</h1>
//         } else if (data) {
//           return <TaskList taskList={data} />
//         } else {
//           return <h1>is Loading....</h1>
//         }
//       }}
//     </Async>
//   )
// }

const postData = (data: TaskValues) => {
  return axios
    .post('http://localhost:9999/tasks', data)
    .then(res => {
      console.log('res', res.data)
      return res.data
    })
    .catch(err => console.log(err))
}

export const CreateForm: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <TaskForm
      onCreate={data => {
        postData(data).then(() => history.push('/'))
      }}
    />
  )
}

const allList = async () => {
  const result = await axios.get('http://localhost:9999/tasks')
  return result.data
}

const completedList = async () => {
  const result = await axios.get('http://localhost:9999/tasks/completed')
  return result.data
}

const pendingList = async () => {
  const result = await axios.get('http://localhost:9999/tasks/pending')
  return result.data
}

type ListType = 'all' | 'completed' | 'pending'

export const Tasks = () => {
  const [type, setType] = React.useState<ListType>('all')
  const [data, setData] = React.useState<TaskValues[] | undefined>(undefined)
  const [error, setError] = React.useState<Error | undefined>(undefined)

  React.useEffect(() => {
    if (type === 'all') {
      console.log('helo')
      allList()
        .then(setData)
        .catch(setError)
    }
    if (type === 'completed') {
      completedList()
        .then(data => {
          setData(data)
        })
        .catch(setError)
    }
    if (type === 'pending') {
      pendingList()
        .then(setData)
        .catch(setError)
    }
  }, [type])

  if (error) {
    return <h1>{error.message}</h1>
  }

  if (data) {
    return (
      <>
        <TaskList
          taskList={data}
          onCompleted={() => {
            setType('completed')
          }}
          onPending={() => {
            setType('pending')
          }}
        />
      </>
    )
  }
  return <h1>is Loading....</h1>
}

export const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Tasks} />
      <Route path="/add" component={CreateForm} />
    </Router>
  )
}

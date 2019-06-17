import axios from 'axios'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
} from 'react-router-dom'
import { EditTaskForm } from './EditTaskForm'
import { User } from './SignIn'
import { TaskForm } from './TaskForm'
import { TaskList } from './TaskList'
import { getOneTask, TaskValues } from './TaskValues'
import { getOneUser } from './user'

const updateData = async (id: string, data: TaskValues) => {
  const result = await axios.put(`http://localhost:9999/tasks/${id}`, data)
  return result.data
}

const postUser = (data: User) => {
  axios
    .post('http://localhost:9999/users', data)

    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}

// const getOneUser = async () => {
//   return axios
//     .get('http://localhost:9999/tasks/5cf4e807c6b9b813825062a4')
//     .then(res => res.data)
//     .catch(err => console.log(err.message))
// }

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

export const postData = (data: TaskValues) => {
  return axios.post('http://localhost:9999/tasks', data).then(res => res.data)
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

export const EditTask: React.FC<
  RouteComponentProps<{ readonly id: string }>
> = ({ match, history }) => (
  <EditTaskForm id={match.params.id} onEdit={() => history.push('/')} />
)

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
      <Route path="/edit/:id" component={EditTask} />
    </Router>
  )
}

const initialValuesOne = {
  title: 'programming',
  description: 'learn functional programming to write accurate code',
  dateInfo: {
    started: new Date(),
    deadline: new Date(),
    scheduled: new Date(),
    completed: new Date(),
  },
}

getOneUser()

// export const App: React.FC = () => {
//   return <EditTaskForm id="5cf4ed226f2f961489f91e51" />
// }

getOneTask()

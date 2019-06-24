import axios from 'axios'
import * as t from 'io-ts'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Section } from 'technoidentity-devfractal'
import { api } from './api'
import { EditTaskForm } from './EditTaskForm'
import { LoginForm } from './LoginForm'
import {
  allTasks,
  completedList,
  createTask,
  deadlineToday,
  pendingList,
  scheduledToday,
} from './taskAPI'
import { TaskForm } from './TaskForm'
import { TaskListView } from './TaskListView'
import { Task } from './types'

export const CreateTaskRoute: React.FC<RouteComponentProps> = ({ history }) => (
  <Section>
    <h1 className="title has-text-centered">Create Task</h1>
    <TaskForm
      onSubmit={async data =>
        createTask(data)
          .then(() => history.push('/'))
          .catch(err => console.log(err))
      }
    />
  </Section>
)

export const EditTaskRoute: React.FC<
  RouteComponentProps<{ readonly id: string }>
> = ({ match, history }) => (
  <section className="section">
    <h1 className="title has-text-centered">Edit Task</h1>
    <EditTaskForm id={match.params.id} onEdit={async () => history.push('/')} />
  </section>
)

type TaskFilter = 'all' | 'completed' | 'pending' | 'today' | 'deadline'

export const TaskListRoute: React.FC<RouteComponentProps> = ({ history }) => {
  const [filter, setFilter] = React.useState<TaskFilter>('all')
  const [tasks, setTasks] = React.useState<ReadonlyArray<Task> | undefined>(
    undefined,
  )
  const [error, setError] = React.useState<Error | undefined>(undefined)

  React.useEffect(() => {
    if (filter === 'all') {
      allTasks()
        .then(setTasks)
        .catch(setError)
    }

    if (filter === 'completed') {
      completedList()
        .then(data => {
          setTasks(data)
        })
        .catch(setError)
    }

    if (filter === 'pending') {
      pendingList()
        .then(setTasks)
        .catch(setError)
    }
    if (filter === 'today') {
      scheduledToday()
        .then(setTasks)
        .catch(setError)
    }
    if (filter === 'deadline') {
      deadlineToday()
        .then(setTasks)
        .catch(setError)
    }
  }, [filter])

  if (error) {
    return <h1 className="is-text is-size-1 is-danger">{error.message}</h1>
  }

  const onLogout = async () => {
    await axios.delete('http://localhost:9999/session')
    history.push('/')
  }

  if (tasks) {
    return (
      <>
        <TaskListView
          taskList={tasks}
          onLogout={onLogout}
          onCompleted={() => setFilter('completed')}
          onPending={() => setFilter('pending')}
          onToday={() => setFilter('today')}
          onDeadline={() => setFilter('deadline')}
        />
      </>
    )
  }

  return <h1 className="is-text is-size-1">is Loading....</h1>
}

export const LoginRoute: React.FC<RouteComponentProps> = ({ history }) => {
  const onLogin = async (data: any) => {
    await api('http://localhost:9999/session', t.any).create(data)
    history.push('/tasks')
  }
  return <LoginForm onLogin={onLogin} />
}

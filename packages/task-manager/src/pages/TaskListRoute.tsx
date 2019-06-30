import axios from 'axios'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { getTasks, TaskFilter } from '../api'
import { Task } from '../utils'
import { TaskListView } from '../views'

export const TaskListRoute: React.FC<RouteComponentProps> = ({ history }) => {
  const [filter, setFilter] = React.useState<TaskFilter>('all')
  const [tasks, setTasks] = React.useState<ReadonlyArray<Task> | undefined>(
    undefined,
  )
  const [error, setError] = React.useState<Error | undefined>(undefined)
  React.useEffect(() => {
    getTasks(filter)
      .then(setTasks)
      .catch(setError)
  }, [filter])
  if (error) {
    return <h1 className="is-text is-size-1 is-danger">{error.message}</h1>
  }
  const onLogout = async () => {
    await axios.delete('http://localhost:9999/session', {
      withCredentials: true,
    })
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

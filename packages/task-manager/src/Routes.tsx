import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Section } from 'technoidentity-devfractal'
import { EditTaskForm } from './EditTaskForm'
import { allTasks, completedList, createTask, pendingList } from './taskAPI'
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

type TaskFilter = 'all' | 'completed' | 'pending'

export const TaskListRoute = () => {
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
  }, [filter])

  if (error) {
    return <h1 className="is-text is-size-1 is-danger">{error.message}</h1>
  }

  if (tasks) {
    return (
      <>
        <TaskListView
          taskList={tasks}
          onCompleted={() => setFilter('completed')}
          onPending={() => setFilter('pending')}
        />
      </>
    )
  }

  return <h1 className="is-text is-size-1">is Loading....</h1>
}

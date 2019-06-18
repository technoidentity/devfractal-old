import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Section } from 'technoidentity-devfractal'
import { EditTaskForm } from './EditTaskForm'
import { TaskForm } from './TaskForm'
import { TaskListView } from './TaskListView'
import { allTasks, completedList, createTask, pendingList } from './tasksAPI'
import { Task } from './types'

export const CreateFormRoute: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <Section>
      <h1 className="title has-text-centered">Create Task</h1>
      <TaskForm
        onCreate={data => {
          createTask(data)
            .then(() => history.push('/'))
            .catch(err => console.log(err))
        }}
      />
    </Section>
  )
}

export const EditTaskFormRoute: React.FC<
  RouteComponentProps<{ readonly id: string }>
> = ({ match, history }) => (
  <section className="section">
    <h1 className="title has-text-centered">Edit Task</h1>
    <EditTaskForm id={match.params.id} onEdit={() => history.push('/')} />
  </section>
)

type ListType = 'all' | 'completed' | 'pending'

export const TaskListRoute = () => {
  const [type, setType] = React.useState<ListType>('all')
  const [data, setData] = React.useState<ReadonlyArray<Task> | undefined>(
    undefined,
  )
  const [error, setError] = React.useState<Error | undefined>(undefined)

  React.useEffect(() => {
    if (type === 'all') {
      allTasks()
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
        <TaskListView
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

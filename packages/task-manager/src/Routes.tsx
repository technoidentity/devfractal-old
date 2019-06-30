import axios from 'axios'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Section } from 'technoidentity-devfractal'
import { EditTaskForm } from './EditTaskForm'
import { LoginForm, LoginValues } from './LoginForm'
import { useRouter } from './RouterUtils'
import { loginUser } from './sessionAPI'
import { SignUpForm, SignUpValues } from './SignUpForm'
import { createTask, getTasks, TaskFilter } from './taskAPI'
import { TaskForm } from './TaskForm'
import { TaskListView } from './TaskListView'
import { Task } from './types'
import { createUser } from './userAPI'

const ServerError: React.FC<{ readonly serverError?: string }> = ({
  serverError,
}) => (
  <>
    {serverError && (
      <article className="message is-danger">
        <div className="message-body">{serverError}</div>
      </article>
    )}
  </>
)

export function useSubmit<T>(
  url: string,
  f: (data: T) => Promise<T>,
  // tslint:disable-next-line: readonly-array
): [string | undefined, (data: T) => Promise<void>] {
  const [serverError, setServerError] = React.useState<string | undefined>(
    undefined,
  )
  const { history } = useRouter()
  const onSubmit = async (data: T) =>
    f(data)
      .then(() => history.push(url))
      .catch(err => setServerError(err.response.data.message))

  return [serverError, onSubmit]
}

export const CreateTaskRoute: React.FC = () => {
  const [serverError, onSubmit] = useSubmit('/', createTask)

  return (
    <Section>
      <h1 className="title has-text-centered">Create Task</h1>
      <ServerError serverError={serverError} />
      <TaskForm onSubmit={onSubmit} />
    </Section>
  )
}

export const EditTaskRoute: React.FC<
  RouteComponentProps<{ readonly id: string }>
> = ({ match, history }) => (
  <section className="section">
    <h1 className="title has-text-centered">Edit Task</h1>
    <EditTaskForm id={match.params.id} onEdit={async () => history.push('/')} />
  </section>
)

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

export const LoginRoute: React.FC<RouteComponentProps> = ({ history }) => {
  const [serverError, setServerError] = React.useState<string | undefined>(
    undefined,
  )
  const onLogin = async (data: LoginValues) => {
    return loginUser(data)
      .then(() => history.push('/tasks'))
      .catch(err => setServerError(err.response.data.error))
  }
  return (
    <>
      <ServerError serverError={serverError} />
      <LoginForm onLogin={onLogin} />
    </>
  )
}

export const SignUpFormRoute: React.FC<RouteComponentProps> = ({ history }) => {
  const [serverError, setServerError] = React.useState<string | undefined>(
    undefined,
  )
  const postUser = async (data: SignUpValues) => {
    console.log(data)
    return createUser(data)
      .then(() => history.push('/login'))
      .catch(err => setServerError(err.response.data.error))
  }
  return (
    <>
      <ServerError serverError={serverError} />
      <SignUpForm onSignUp={postUser} />
    </>
  )
}

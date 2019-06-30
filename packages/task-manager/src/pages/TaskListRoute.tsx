import React from 'react'
import { getTasks, sessionApi, TaskFilter } from '../api'
import { ErrorView, Loading, ServerError, useGET, useSubmit } from '../utils'
import { TaskListView } from '../views'

export const TaskListRoute: React.FC = () => {
  const [filter, setFilter] = React.useState<TaskFilter>('all')
  const [tasks, error] = useGET(getTasks, filter)
  const [serverError, onLogout] = useSubmit('/', () => sessionApi.del(''))

  if (error) {
    return <ErrorView error={error} />
  }

  if (tasks) {
    return (
      <>
        <ServerError error={serverError} />
        <TaskListView
          taskList={tasks}
          // tslint:disable-next-line: no-unnecessary-callback-wrapper
          onLogout={() => onLogout()}
          onFilterChange={setFilter}
        />
      </>
    )
  }

  return <Loading />
}

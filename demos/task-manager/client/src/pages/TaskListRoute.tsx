import React from 'react'
import { Get, useMatch } from 'technoidentity-devfractal'
import { getTasks, TaskFilter } from '../common'
import { TaskListView } from '../views'

export const TaskListRoute: React.FC = () => {
  const { params } = useMatch<{ readonly filter: TaskFilter }>()
  const filterOne = (params && params.filter) || 'all'
  return (
    <Get asyncFn={getTasks} deps={[filterOne]}>
      {data => <TaskListView taskList={data} />}
    </Get>
  )
}

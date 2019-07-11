import React from 'react'
import { Get, useMatch } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { getTasks, TaskFilter } from '../common'
import { TaskListView } from '../views'

const Params = req({ filter: TaskFilter })

export const TaskListRoute: React.FC = () => {
  const { params } = useMatch(Params)
  const filterOne = (params && params.filter) || 'all'
  return (
    <Get asyncFn={getTasks} deps={[filterOne]}>
      {data => <TaskListView taskList={data} />}
    </Get>
  )
}

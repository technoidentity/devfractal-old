import React from 'react'
import { Get } from 'technoidentity-devfractal-api'
import { useMatch } from 'technoidentity-devfractal-router'
import { opt } from 'technoidentity-utils'
import { getTasks, TaskFilter } from '../common'
import { TaskListView } from '../views'

const Params = opt({ filter: TaskFilter })

export const TaskListRoute: React.FC = () => {
  const { params } = useMatch(Params)
  const filterOne = (params && params.filter) || 'all'
  return (
    <Get asyncFn={getTasks} deps={[filterOne]}>
      {data => <TaskListView taskList={data} />}
    </Get>
  )
}

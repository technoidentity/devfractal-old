import React from 'react'
import { useParamsSafe } from 'technoidentity-core'
import { Get } from 'technoidentity-crud'
import { opt } from 'technoidentity-utils'
import { getTasks, TaskFilter } from '../common'
import { TaskListView } from '../views'

const Params = opt({ filter: TaskFilter })

export const TaskListRoute: React.FC = () => {
  const params = useParamsSafe(Params)
  const filterOne = (params && params.filter) || 'all'
  return (
    <Get asyncFn={getTasks} deps={[filterOne]}>
      {data => <TaskListView taskList={data} />}
    </Get>
  )
}

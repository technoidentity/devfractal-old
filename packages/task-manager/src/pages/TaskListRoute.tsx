import React from 'react'
import { getTasks, TaskFilter } from '../common'
import { Async } from '../utils'
import { TaskListView } from '../views'

export const TaskListRoute: React.FC = () => {
  const [filter, setFilter] = React.useState<TaskFilter>('all')

  return (
    <Async asyncFn={getTasks} params={[filter]}>
      {data => <TaskListView taskList={data} onFilterChange={setFilter} />}
    </Async>
  )
}

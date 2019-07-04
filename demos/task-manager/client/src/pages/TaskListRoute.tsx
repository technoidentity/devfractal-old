import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { getTasks, TaskFilter } from '../common'
import { TaskListView } from '../views'

export const TaskListRoute: React.FC = () => {
  const [filter, setFilter] = React.useState<TaskFilter>('all')

  return (
    <Get asyncFn={getTasks} deps={[filter]}>
      {data => <TaskListView taskList={data} onFilterChange={setFilter} />}
    </Get>
  )
}

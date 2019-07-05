import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Get } from 'technoidentity-devfractal'
import { getTasks, TaskFilter } from '../common'
import { TaskListView } from '../views'

export interface TaskListRouteProps {
  readonly filter: TaskFilter
}

export const TaskListRoute: React.FC<
  RouteComponentProps<TaskListRouteProps>
> = ({ match }: any) => {
  console.log(match)
  const filterOne = (match && match.params && match.params.filter) || 'all'
  console.log(filterOne)
  return (
    <Get asyncFn={getTasks} deps={[filterOne]}>
      {data => <TaskListView taskList={data} />}
    </Get>
  )
}

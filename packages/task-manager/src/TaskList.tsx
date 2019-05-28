import { format } from 'date-fns'
import React from 'react'
import {
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Tr,
} from 'technoidentity-devfractal'
import { TaskValues } from './TaskForm'

export interface TaskItemProps {
  readonly taskItem: TaskValues
}

export const TaskItem: React.FC<TaskItemProps> = ({ taskItem }) => {
  return (
    <Tr>
      <Td>{taskItem.title}</Td>
      <Td>{taskItem.description}</Td>
      <Td>{taskItem.started && format(taskItem.started, 'DD/MM/YYYY')}</Td>
      <Td>{taskItem.deadline && format(taskItem.deadline, 'DD/MM/YYYY')}</Td>
      <Td>{taskItem.scheduled && format(taskItem.scheduled, 'DD/MM/YYYY')}</Td>
    </Tr>
  )
}

export interface TaskListProps {
  readonly taskList: ReadonlyArray<TaskValues>
}

export const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
  return (
    <Table>
      <TableHead>
        <Tr>
          <Th>Title</Th>
          <Th>Description</Th>
          <Th>StartOn</Th>
          <Th>Deadline</Th>
          <Th>Scheduled</Th>
          <Th />
        </Tr>
      </TableHead>
      <TableBody>
        {taskList.map(task => (
          <TaskItem key={task.title} taskItem={task} />
        ))}
      </TableBody>
    </Table>
  )
}

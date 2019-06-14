import { format } from 'date-fns'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  ButtonsGroup,
  Field,
  Section,
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Title,
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
      <Td>
        {taskItem.dateInfo.started &&
          format(taskItem.dateInfo.started, 'DD/MM/YYYY')}
      </Td>
      <Td>
        {taskItem.dateInfo.deadline &&
          format(taskItem.dateInfo.deadline, 'DD/MM/YYYY')}
      </Td>
      <Td>
        {taskItem.dateInfo.scheduled &&
          format(taskItem.dateInfo.scheduled, 'DD/MM/YYYY')}
      </Td>
      <Td>
        {taskItem.dateInfo.completed &&
          format(taskItem.dateInfo.completed, 'DD/MM/YYYY')}
      </Td>
    </Tr>
  )
}

export interface TaskListProps {
  readonly taskList: ReadonlyArray<TaskValues>
  onCompleted(): void
  onPending(): void
}

export const TaskList: React.FC<TaskListProps> = ({
  taskList,
  onCompleted,
  onPending,
}) => {
  return (
    <Section>
      <Title textAlignment="centered">Task Management</Title>
      <ButtonsGroup alignment="right">
        <Link to="/add" className="button is-link">
          Add
        </Link>
      </ButtonsGroup>
      <Table striped bordered fullWidth>
        <TableHead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Started</Th>
            <Th>Deadline</Th>
            <Th>Scheduled</Th>
            <Th>Completed</Th>
          </Tr>
        </TableHead>
        <TableBody>
          {taskList.map(task => (
            <TaskItem key={(task as any)._id} taskItem={task} />
          ))}
        </TableBody>
      </Table>
      <Field grouped groupModifier="grouped-centered">
        <Button variant="success" onClick={onCompleted}>
          completed
        </Button>
        <Button variant="danger" onClick={onPending}>
          pending
        </Button>
      </Field>
    </Section>
  )
}

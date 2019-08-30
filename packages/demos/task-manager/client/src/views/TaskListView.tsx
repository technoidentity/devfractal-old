import { format } from 'date-fns'
import {
  ButtonsGroup,
  component,
  Field,
  Section,
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Title,
  Tr,
} from 'devfractal-ui-core'
import React from 'react'
import { Link } from 'react-router-dom'
import { readonlyArray } from 'technoidentity-spec'
import { req } from 'technoidentity-utils'
import { Task } from '../common'
import { PaginationView } from './PaginateView'

const TaskItemProps = req({ taskItem: Task })

function formatDate(date: Date | undefined): string | undefined {
  return date && format(date, 'dd/MM/yyyy')
}

const TaskItem = component(
  TaskItemProps,
  ({ taskItem: { _id, title, description, dateInfo } }) => {
    return (
      <Tr>
        <Td>{title}</Td>
        <Td>{description}</Td>
        <Td>{formatDate(dateInfo.started)}</Td>
        <Td>{formatDate(dateInfo.deadline)}</Td>
        <Td>{formatDate(dateInfo.scheduled)}</Td>
        <Td>{formatDate(dateInfo.completed)}</Td>
        <Td>
          <Link to={`/tasks/${_id}/edit`} className="button is-primary is-link">
            Edit
          </Link>
        </Td>
      </Tr>
    )
  },
)

const TaskListViewProps = req({
  taskList: readonlyArray(Task),
})

export const TaskListView = component(TaskListViewProps, ({ taskList }) => (
  <Section>
    <Title textAlignment="centered">Task Management</Title>
    <ButtonsGroup alignment="right">
      <Link to="/add" className="button is-primary">
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
          <Th />
        </Tr>
      </TableHead>
      <TableBody>
        {taskList.map(task => (
          <TaskItem key={task._id} taskItem={task} />
        ))}
      </TableBody>
    </Table>

    <Field grouped groupModifier="grouped-centered">
      <Link to="/tasks" className="button is-primary">
        All
      </Link>
      <Link to="/tasks/today" className="button is-info">
        Scheduled Today
      </Link>
      <Link to="/tasks/completed" className="button is-success">
        Completed
      </Link>
      <Link to="/tasks/pending" className="button is-danger">
        Pending
      </Link>
      <Link to="/tasks/deadline" className="button is-warning">
        Deadline Today
      </Link>
    </Field>
    <Section>
      <PaginationView />
    </Section>
  </Section>
))

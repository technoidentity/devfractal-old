import { ButtonLink } from 'devfractal-crud'
import { Get } from 'devfractal-ui-api'
import {
  ButtonsGroup,
  Section,
  Table,
  TableBody,
  TableHead,
  Th,
  Tr,
} from 'devfractal-ui-core'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { all, FSTodo } from '../todoAPI'
import { FsTodoOne } from './FsTodoOne'

export interface FSListViewProps {
  readonly fsList: ReadonlyArray<FSTodo>
  onEdit(id: string): void
}

export const FsListView: React.FC<FSListViewProps> = ({ fsList, onEdit }) => (
  <>
    <ButtonsGroup alignment="right">
      <ButtonLink to="/list/add" variant="primary">
        Add
      </ButtonLink>
    </ButtonsGroup>
    <Table>
      <TableHead>
        <Tr>
          <Th>ID</Th>
          <Th>Title</Th>
          <Th>Done</Th>
        </Tr>
      </TableHead>
      <TableBody>
        {fsList.map(todo => (
          <FsTodoOne todo={todo} key={todo.id} onEdit={onEdit} />
        ))}
      </TableBody>
    </Table>
  </>
)

export const FsList: React.FC<RouteComponentProps> = ({ history }) => {
  const handleEdit: (id: string) => void = (id: string) => {
    history.push(`/list/${id}/edit`)
  }
  return (
    <Section>
      <Get asyncFn={all}>
        {data => <FsListView fsList={data} onEdit={handleEdit} />}
      </Get>
    </Section>
  )
}

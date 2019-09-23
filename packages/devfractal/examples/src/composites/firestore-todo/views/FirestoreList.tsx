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
import { del, FSTodo, many } from '../todoAPI'
import { FsTodoOne } from './FsTodoOne'

export interface FSListViewProps {
  readonly fsList: ReadonlyArray<FSTodo>
  onEdit(id: string): void
  onDelete(id: string): void
}

export const FsListView: React.FC<FSListViewProps> = ({
  fsList,
  onEdit,
  onDelete,
}) => (
  <>
    <ButtonsGroup alignment="right">
      <ButtonLink to="/list/add" variant="primary">
        Add
      </ButtonLink>
    </ButtonsGroup>
    <Table fullWidth>
      <TableHead>
        <Tr>
          <Th>ID</Th>
          <Th>Title</Th>
          <Th>Done</Th>
          <Th>Actions</Th>
        </Tr>
      </TableHead>
      <TableBody>
        {fsList.map(todo => (
          <FsTodoOne
            todo={todo}
            key={todo.id}
            onEdit={onEdit}
            onDelete={onDelete}
          />
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
      <Get asyncFn={many}>
        {(data, fetchAgain) => (
          <FsListView
            fsList={data}
            onEdit={handleEdit}
            onDelete={async id => {
              await del(id)
              fetchAgain()
            }}
          />
        )}
      </Get>
    </Section>
  )
}

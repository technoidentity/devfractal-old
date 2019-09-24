// tslint:disable typedef
import { ButtonLink } from 'devfractal-crud'
import { Get } from 'devfractal-ui-api'
import {
  ButtonsGroup,
  component,
  Section,
  Table,
  TableBody,
  TableHead,
  Th,
  Tr,
} from 'devfractal-ui-core'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { fn, readonlyArray, req } from 'technoidentity-utils'
import { FSTodo, fsTodoAPI } from '../todoAPI'
import { FsTodoOne } from './FsTodoOne'

export const FSListViewProps = req({
  fsList: readonlyArray(FSTodo),
  onEdit: fn<(id: string) => void>(),
  onDelete: fn<(id: string) => void>(),
})

export const FsListView = component(
  FSListViewProps,
  ({ fsList, onEdit, onDelete }) => (
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
  ),
)

export const FsList: React.FC<RouteComponentProps> = ({ history }) => {
  const handleEdit: (id: string) => void = (id: string) => {
    history.push(`/list/${id}/edit`)
  }

  return (
    <Section>
      <Get asyncFn={fsTodoAPI.many}>
        {(data, fetchAgain) => (
          <FsListView
            fsList={data}
            onEdit={handleEdit}
            onDelete={async id => {
              await fsTodoAPI.del(id)
              fetchAgain()
            }}
          />
        )}
      </Get>
    </Section>
  )
}

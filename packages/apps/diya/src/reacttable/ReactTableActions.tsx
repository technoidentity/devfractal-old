import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { ButtonLink, Icon, Link } from 'technoidentity-devfractal'
import { ReactTableActionsValues } from './models'

export const ReactTableActions = ({
  id,
  vehicleId,
  editTo,
  assignTo,
  onDelete,
  addTrip,
}: ReactTableActionsValues) => {
  return (
    <>
      {editTo ? (
        <Link to={editTo(id)}>
          <Icon icon={faEdit} />
        </Link>
      ) : // tslint:disable-next-line:no-null-keyword
      null}
      {onDelete ? (
        <a
          href="#!"
          onClick={evt => {
            evt.preventDefault()
            onDelete(id)
          }}
        >
          <Icon icon={faTrash} />
        </a>
      ) : // tslint:disable-next-line:no-null-keyword
      null}
      {assignTo ? (
        <ButtonLink to={assignTo(id)} size="small" variant="info">
          Assign
        </ButtonLink>
      ) : // tslint:disable-next-line:no-null-keyword
      null}
      {addTrip ? (
        <ButtonLink
          to={addTrip(vehicleId ? vehicleId : '')}
          size="small"
          variant="info"
        >
          Add Trip
        </ButtonLink>
      ) : // tslint:disable-next-line:no-null-keyword
      null}
    </>
  )
}

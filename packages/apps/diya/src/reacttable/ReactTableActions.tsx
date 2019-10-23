import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { ButtonLink, Icon, Link } from 'technoidentity-devfractal'
import { ReactTableActionsValues } from './models'

export const ReactTableActions = ({
  id,
  editTo,
  assignTo,
  onDelete,
}: ReactTableActionsValues) => {
  return (
    <>
      {editTo ? (
        <Link to={editTo(id)}>
          <Icon icon={faEdit} />
        </Link>
      ) : (
        <></>
      )}
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
      ) : (
        <></>
      )}
      {assignTo ? (
        <ButtonLink to={assignTo(id)} size="small" variant="info">
          Assign
        </ButtonLink>
      ) : (
        <></>
      )}
    </>
  )
}

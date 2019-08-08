import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { string, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'

const ActionsProps = req({
  editUrl: string,
})

type ActionsProps = TypeOf<typeof ActionsProps>

export const Actions: React.FC<ActionsProps> = ({ editUrl }) => (
  <>
    <Link to={editUrl}>
      <Icon icon={faEdit} />
    </Link>
    <Link to="">
      <Icon icon={faTrash} />
    </Link>
  </>
)

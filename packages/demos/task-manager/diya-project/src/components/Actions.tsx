import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { string } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import { component, Icon } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'

const ActionsProps = req({ editLink: string })

export const Actions = component(ActionsProps, ({ editLink }) => (
  <>
    <Link to={editLink}>
      <Icon icon={faEdit} />
    </Link>
    <Link to="">
      <Icon icon={faTrash} />
    </Link>
  </>
))

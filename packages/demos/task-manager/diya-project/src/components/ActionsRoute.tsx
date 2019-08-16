import { faBus, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { string, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonsGroup, Icon } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'

const ActionsRoutesProps = req({ editLink: string })

type ActionsRoutesProps = TypeOf<typeof ActionsRoutesProps>

export const ActionsRoutes: React.FC<ActionsRoutesProps> = ({ editLink }) => (
  <ButtonsGroup>
    <Link to={editLink} className="button is-small is-rounded">
      <Icon icon={faMapMarker} />
      <div>Plan Route</div>
    </Link>
    <Button rounded size="small">
      <Icon icon={faBus} />
      <div>Location</div>
    </Button>
  </ButtonsGroup>
)

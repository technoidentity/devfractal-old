import { faBus, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  ButtonsGroup,
  component,
  CreateLink,
  Icon,
  links,
  listComponent,
  SimpleTable,
} from 'technoidentity-devfractal'
import { req, string } from 'technoidentity-utils'
import { Ev } from '../common'
import { HeadTitle } from '../components'

const ActionsRoutesProps = req({ editTo: string })

const Actions = component(ActionsRoutesProps, ({ editTo }) => (
  <ButtonsGroup>
    <Link to={editTo} className="button is-small is-rounded">
      <Icon icon={faMapMarker} />
      <div>Plan SafeRoute</div>
    </Link>

    <Button rounded size="small">
      <Icon icon={faBus} />
      <div>Location</div>
    </Button>
  </ButtonsGroup>
))

const evsLinks = links('evs')

export const EVSList = listComponent(Ev, ({ data: evsList }) => (
  <>
    <HeadTitle>EVS assigned</HeadTitle>

    <CreateLink alignment="right" variant="primary" to={evsLinks.create}>
      Request New EV
    </CreateLink>

    <SimpleTable
      data={evsList}
      select={['driverName']}
      override={{ driverName: 'Driver' }}
      extra={['Actions']}
      striped
    >
      {(key: string) =>
        // tslint:disable-next-line: no-null-keyword
        key === 'Actions' ? <Actions editTo={`/planRoute`} /> : null
      }
    </SimpleTable>
  </>
))

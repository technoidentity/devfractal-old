import { faBus, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { component } from 'srtp-core'
import { links, listComponent, SimpleTable } from 'srtp-crud'
import { Button, ButtonsGroup, Icon } from 'srtp-ui'
import { req, string } from 'srtp-utils'
import { Ev } from '../common'
import { HeadTitle } from '../components'
import { CreateLink } from './CreateLink'

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

    <CreateLink to={evsLinks.create}>Request New EV</CreateLink>

    <SimpleTable
      data={evsList}
      select={['driverName']}
      override={{ driverName: 'Driver' }}
      extra={['Actions']}
    >
      {(key: string) =>
        // tslint:disable-next-line: no-null-keyword
        key === 'Actions' ? <Actions editTo={`/planRoute`} /> : null
      }
    </SimpleTable>
  </>
))

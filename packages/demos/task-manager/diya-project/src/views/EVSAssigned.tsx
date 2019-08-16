import { faBus, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { string } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  ButtonsGroup,
  component,
  Icon,
  SimpleTable,
} from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Ev } from '../common'
import { CreateLink, HeadTitle } from '../components'
import { links, listProps } from '../crud'

const ActionsRoutesProps = req({ editLink: string })

const Actions = component(ActionsRoutesProps, ({ editLink }) => (
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
))

const EVSListProps = listProps(Ev)

const evsLinks = links('evs')

export const EVSList = component(EVSListProps, ({ data: evsList }) => (
  <>
    <HeadTitle>EVS assigned</HeadTitle>

    <CreateLink to={evsLinks.create}> Request New EV</CreateLink>

    <SimpleTable
      data={evsList}
      headers={['driverName', 'Actions']}
      headerLabels={['Driver', 'Actions']}
      striped
    >
      {key =>
        // tslint:disable-next-line: no-null-keyword
        key === 'Actions' ? <Actions editLink={`/planRoute`} /> : null
      }
    </SimpleTable>
  </>
))

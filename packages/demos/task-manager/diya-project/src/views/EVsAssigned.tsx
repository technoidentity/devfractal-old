import { ButtonsGroup, component, Section, Title } from 'devfractal-ui-core'
import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import { Get, SimpleTable } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Evs, evsAPI } from '../common'
import { ActionsRoutes } from './ActionsRoute'

const EVSListProps = req({ evsList: readonlyArray(Evs) })

type EVSListProps = TypeOf<typeof EVSListProps>

export const EVSListView: React.FC<EVSListProps> = ({ evsList }) => (
  <>
    <ButtonsGroup alignment="right">
      <Link to="evs/add" className="button is-primary">
        Request New EV
      </Link>
    </ButtonsGroup>
    <SimpleTable
      data={evsList}
      headers={['driverName', 'Actions']}
      headerLabels={['Driver', 'Actions']}
      striped
    >
      {key =>
        // tslint:disable-next-line: no-null-keyword
        key === 'Actions' ? <ActionsRoutes changeUrl={`/planRoute`} /> : null
      }
    </SimpleTable>
  </>
)

export const EVSListTable = component(EVSListProps, ({ evsList }) => (
  <Section>
    <Title size="4" textColor="info">
      EVS assigned
    </Title>
    <EVSListView evsList={evsList} />
  </Section>
))

export const EVsAssigned: React.FC = () => (
  <>
    <Get asyncFn={() => evsAPI.many()}>
      {data => <EVSListTable evsList={data} />}
    </Get>
  </>
)

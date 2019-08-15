import React from 'react'
import { component, SimpleTable } from 'technoidentity-devfractal'
import { Ev, listProps } from '../common'
import { ActionsRoutes, CreateLink, HeadTitle } from '../components'

const EVSListProps = listProps(Ev)

export const EVSList = component(EVSListProps, ({ data: evsList }) => (
  <>
    <HeadTitle>EVS assigned</HeadTitle>

    <CreateLink to="evs/add"> Request New EV</CreateLink>

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
))
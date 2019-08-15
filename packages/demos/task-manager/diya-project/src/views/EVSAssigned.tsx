import { readonlyArray } from 'io-ts'
import React from 'react'
import { component, SimpleTable } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Ev } from '../common'
import { ActionsRoutes, CreateLink, HeadTitle } from '../components'

const EVSListProps = req({ evsList: readonlyArray(Ev) })

export const EVSList = component(EVSListProps, ({ evsList }) => (
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

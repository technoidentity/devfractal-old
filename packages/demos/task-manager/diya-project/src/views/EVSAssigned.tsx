import React from 'react'
import { component, SimpleTable } from 'technoidentity-devfractal'
import { Ev, links, listProps } from '../common'
import { ActionsRoutes, CreateLink, HeadTitle } from '../components'

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
        key === 'Actions' ? <ActionsRoutes editLink={`/planRoute`} /> : null
      }
    </SimpleTable>
  </>
))

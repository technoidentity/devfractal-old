import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import {
  component,
  Get,
  Section,
  SimpleTable,
  Title,
} from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Ev, evAPI } from '../common'
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

export const EVsAssignedRoute: React.FC = () => (
  <>
    <Get asyncFn={() => evAPI.many()}>{data => <EVSList evsList={data} />}</Get>
  </>
)

import { SimpleTable } from 'devfractal-simple'
import { Get } from 'devfractal-ui-api'
import { component, Section, Title } from 'devfractal-ui-core'
import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { req } from 'technoidentity-utils'
import { ViewTrips, viewTripsAPI } from '../common'
import { Actions } from './Actions'

const ViewTripsProps = req({ viewTripsList: readonlyArray(ViewTrips) })

type ViewTripsProps = TypeOf<typeof ViewTripsProps>

export const TripsView: React.FC<ViewTripsProps> = ({ viewTripsList }) => (
  <SimpleTable
    data={viewTripsList}
    headers={['customerName', 'address', 'contactNumber', 'status', 'Actions']}
    striped
  >
    {(key, values) =>
      key === 'Actions' ? (
        <Actions editURL={`viewTrips/${values.ID}/edit`} />
      ) : // tslint:disable-next-line: no-null-keyword
      null
    }
  </SimpleTable>
)

export const ViewTripsTable = component(ViewTripsProps, ({ viewTripsList }) => (
  <Section>
    <Title size="4" textColor="info">
      View Trips
    </Title>
    <TripsView viewTripsList={viewTripsList} />
  </Section>
))

export const ViewTripsList: React.FC = () => (
  <Get asyncFn={async () => viewTripsAPI.many()}>
    {data => <ViewTripsTable viewTripsList={data} />}
  </Get>
)

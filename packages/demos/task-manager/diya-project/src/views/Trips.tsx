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
import { Trip, tripAPI } from '../common'
import { Actions } from './Actions'

const TripsProps = req({ tripsList: readonlyArray(Trip) })

type TripsProps = TypeOf<typeof TripsProps>

const TripsView: React.FC<TripsProps> = ({ tripsList }) => (
  <SimpleTable
    data={tripsList}
    headers={['customerName', 'address', 'contactNumber', 'status', 'Actions']}
    striped
  >
    {(key, values) =>
      key === 'Actions' ? (
        <Actions editURL={`trips/${values.id}/edit`} />
      ) : // tslint:disable-next-line: no-null-keyword
      null
    }
  </SimpleTable>
)

export const TripsTable = component(TripsProps, ({ tripsList }) => (
  <Section>
    <Title size="4" textColor="info">
      View Trips
    </Title>
    <TripsView tripsList={tripsList} />
  </Section>
))

export const TripsList: React.FC = () => (
  <Get asyncFn={async () => tripAPI.many()}>
    {data => <TripsTable tripsList={data} />}
  </Get>
)

import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { component, Get, Section, Title } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Trip, tripAPI } from '../common'
import { CrudTable } from '../components'

const TripListViewProps = req({ tripsList: readonlyArray(Trip) })

type TripListViewProps = TypeOf<typeof TripListViewProps>

export const TripListView = component(TripListViewProps, ({ tripsList }) => (
  <Section>
    <Title size="4" textColor="info">
      View Trips
    </Title>
    <CrudTable
      data={tripsList}
      headers={['customerName', 'address', 'contactNumber', 'status']}
      editURL={value => `trips/${value.id}/edit`}
    />
  </Section>
))

export const TripList: React.FC = () => (
  <Get asyncFn={async () => tripAPI.many()}>
    {data => <TripListView tripsList={data} />}
  </Get>
)

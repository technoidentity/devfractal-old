import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { component, Get, Section, Title } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Trip, tripAPI } from '../common'
import { CrudTable, HeadTitle } from '../components'

const TripListProps = req({ tripsList: readonlyArray(Trip) })

export const TripList = component(TripListProps, ({ tripsList }) => (
  <Section>
    <HeadTitle>View Trips</HeadTitle>

    <CrudTable
      data={tripsList}
      headers={['customerName', 'address', 'contactNumber', 'status']}
      editURL={value => `trips/${value.id}/edit`}
    />
  </Section>
))

export const TripListRoute: React.FC = () => (
  <Get asyncFn={async () => tripAPI.many()}>
    {data => <TripList tripsList={data} />}
  </Get>
)

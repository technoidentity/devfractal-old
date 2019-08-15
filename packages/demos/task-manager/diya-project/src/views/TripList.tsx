import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { listProps, Trip } from '../common'
import { CrudTable, HeadTitle } from '../components'

const TripListProps = listProps(Trip)

export const TripList = component(TripListProps, ({ data: tripsList }) => (
  <Section>
    <HeadTitle>View Trips</HeadTitle>

    <CrudTable
      data={tripsList}
      headers={['customerName', 'address', 'contactNumber', 'status']}
      editURL={value => `trips/${value.id}/edit`}
    />
  </Section>
))

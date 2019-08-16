import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { links, listProps, Trip } from '../common'
import { CrudTable, HeadTitle } from '../components'

const TripListProps = listProps(Trip)

const tripLinks = links('trips')

export const TripList = component(TripListProps, ({ data: tripsList }) => (
  <Section>
    <HeadTitle>View Trips</HeadTitle>

    <CrudTable
      data={tripsList}
      headers={['customerName', 'address', 'contactNumber', 'status']}
      editURL={v => tripLinks.edit(v.id)}
    />
  </Section>
))

import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { Trip } from '../common'
import { HeadTitle } from '../components'
import { CrudTable, links, listProps } from '../crud'

const TripListProps = listProps(Trip)

const tripLinks = links('trips')

export const TripList = component(TripListProps, ({ data: tripsList }) => (
  <Section>
    <HeadTitle>View Trips</HeadTitle>

    <CrudTable
      data={tripsList}
      headers={['customerName', 'address', 'contactNumber', 'status']}
      editLink={v => tripLinks.edit(v.id)}
    />
  </Section>
))

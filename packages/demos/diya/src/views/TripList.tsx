import React from 'react'
import { Section, v2 } from 'technoidentity-devfractal'
import { Trip } from '../common'
import { HeadTitle } from '../components'

const tripLinks = v2.links('trips')

export const TripList = v2.listComponent(Trip, ({ data: tripsList }) => (
  <Section>
    <HeadTitle>View Trips</HeadTitle>

    <v2.CrudTable
      data={tripsList}
      headers={['customerName', 'address', 'contactNumber', 'status']}
      editLink={v => tripLinks.edit(v.id)}
    />
  </Section>
))

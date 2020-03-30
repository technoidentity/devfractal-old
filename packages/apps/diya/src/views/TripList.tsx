import React from 'react'
import { CrudTable, links, listComponent } from 'srtp-crud'
import { Section } from 'srtp-ui'
import { Trip } from '../common'
import { HeadTitle } from '../components'

const tripLinks = links('trips')

export const TripList = listComponent(Trip, ({ data: tripsList }) => (
  <Section>
    <HeadTitle>View Trips</HeadTitle>

    <CrudTable
      data={tripsList}
      select={['customerName', 'address', 'contactNumber', 'status']}
      editTo={v => tripLinks.edit(v.id)}
    />
  </Section>
))

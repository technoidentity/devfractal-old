import React from 'react'
import {
  CreateLink,
  CrudTable,
  links,
  listComponent,
  RoutedPager,
  Section,
} from 'stp-devfractal'
import { Client } from '../common'
import { HeadTitle } from '../components'

const clientLinks = links('clients')

export const ClientList = listComponent(Client, ({ data: clientList }) => {
  return (
    <Section>
      <HeadTitle>Clients</HeadTitle>

      <CreateLink alignment="right" variant="primary" to={clientLinks.create}>
        Add Client
      </CreateLink>

      <CrudTable
        data={clientList}
        select={[
          'clientName',
          'contractType',
          'email',
          'numberOfEVS',
          'rateOfEVS',
          'assignedEVSHistory',
        ]}
        override={{
          numberOfEVS: 'No. of EVS',
          rateOfEVS: 'Rate of EVS',
          assignedEVSHistory: 'Assigned EVS history',
        }}
        editTo={v => clientLinks.edit(v.id)}
      />

      <RoutedPager />
    </Section>
  )
})

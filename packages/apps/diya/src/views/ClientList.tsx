import React from 'react'
import {
  CreateLink,
  CrudTable,
  links,
  listComponent,
  RoutedPager,
  Section,
} from 'technoidentity-devfractal'
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
        headers={[
          'clientName',
          'contractType',
          'email',
          'numberOfEVS',
          'rateOfEVS',
          'assignedEVSHistory',
        ]}
        labels={[
          'Client Name',
          'Contract Type',
          'Email',
          'No. of EVS',
          'Rate of EVS',
          'Assigned EVS History',
          'Actions',
        ]}
        editTo={v => clientLinks.edit(v.id)}
      />

      <RoutedPager />
    </Section>
  )
})

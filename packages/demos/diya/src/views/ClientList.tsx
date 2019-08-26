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

export const ClientList = listComponent(Client, ({ data: clientList }) => (
  <Section>
    <HeadTitle>Clients</HeadTitle>

    <CreateLink to={clientLinks.create}>Add Client</CreateLink>

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
      headerLabels={[
        'Client Name',
        'Contract Type',
        'Email',
        'No. of EVS',
        'Rate of EVS',
        'Assigned EVS History',
      ]}
      editTo={v => clientLinks.edit(v.id)}
    />

    <RoutedPager />
  </Section>
))

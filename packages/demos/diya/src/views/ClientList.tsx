import React from 'react'
import { Section, v2 } from 'technoidentity-devfractal'
import { Client } from '../common'
import { CreateLink, HeadTitle } from '../components'

const clientLinks = v2.links('clients')

export const ClientList = v2.listComponent(Client, ({ data: clientList }) => (
  <Section>
    <HeadTitle>Clients</HeadTitle>

    <CreateLink to={clientLinks.create}>Add Client</CreateLink>

    <v2.CrudTable
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
      editLink={v => clientLinks.edit(v.id)}
    />

    <v2.RoutedPager />
  </Section>
))

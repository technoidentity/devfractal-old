import React from 'react'
import { CrudTable, links, listComponent, RoutedPager } from 'srtp-crud'
import { Section } from 'srtp-ui'
import { Client } from '../common'
import { HeadTitle } from '../components'
import { CreateLink } from './CreateLink'

const clientLinks = links('clients')

export const ClientList = listComponent(Client, ({ data: clientList }) => {
  return (
    <Section>
      <HeadTitle>Clients</HeadTitle>

      <CreateLink variant="primary" to={clientLinks.create}>
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

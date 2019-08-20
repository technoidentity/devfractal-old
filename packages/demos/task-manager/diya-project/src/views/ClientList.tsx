import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { Client } from '../common'
import { CreateLink, HeadTitle } from '../components'
import { CrudTable, links, listProps, RoutedPager } from '../crud'

export const ClientListProps = listProps(Client)

const clientLinks = links('clients')

export const ClientList = component(ClientListProps, ({ data: clientList }) => (
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
      editLink={v => clientLinks.edit(v.id)}
    />

    <RoutedPager />
  </Section>
))

import React from 'react'
import { component, Section, SimpleTable } from 'technoidentity-devfractal'
import { Client } from '../common'
import { CreateLink, HeadTitle } from '../components'
import { Actions, links, listProps, StatePager } from '../crud'

export const ClientListProps = listProps(Client)

const clientLinks = links('clients')

export const ClientList = component(ClientListProps, ({ data: clientList }) => (
  <Section>
    <HeadTitle>Clients</HeadTitle>

    <CreateLink to={clientLinks.create}>Add Client</CreateLink>

    <SimpleTable
      data={clientList}
      striped
      headers={[
        'clientName',
        'contractType',
        'email',
        'numberOfEVS',
        'rateOfEVS',
        'assignedEVSHistory',
        'Actions',
      ]}
      headerLabels={[
        'Client Name',
        'Contract Type',
        'Email',
        'No. of EVS',
        'Rate of EVS',
        'Assigned EVS History',
        'Actions',
      ]}
    >
      {(key, v) =>
        key === 'Actions' ? (
          <Actions editLink={clientLinks.edit(v.id)} />
        ) : // tslint:disable-next-line: no-null-keyword
        null
      }
    </SimpleTable>

    <StatePager />
  </Section>
))

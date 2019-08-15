import React from 'react'
import { component, Section, SimpleTable } from 'technoidentity-devfractal'
import { Actions, Client, listProps } from '../common'
import { CreateLink, HeadTitle, StaticPagination } from '../components'

export const ClientListProps = listProps(Client)

export const ClientList = component(ClientListProps, ({ data: clientList }) => (
  <Section>
    <HeadTitle>Clients</HeadTitle>

    <CreateLink to="/clients/add">Add Client</CreateLink>

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
      {(key, values) =>
        key === 'Actions' ? (
          <Actions editURL={`/clients/${values.id}/edit`} />
        ) : // tslint:disable-next-line: no-null-keyword
        null
      }
    </SimpleTable>

    <StaticPagination />
  </Section>
))

import React from 'react'
import {
  CreateLink,
  links,
  listComponent,
  Section,
} from 'technoidentity-devfractal'
import { Client } from '../common'
import { HeadTitle } from '../components'
import { Table } from '../reacttable/Table'

const clientLinks = links('clients')

export const ClientList = listComponent(Client, ({ data: clientList }) => {
  const tableData = clientList.map(data => ({ ...data, actions: 'actions' }))
  return (
    <Section>
      <HeadTitle>Clients</HeadTitle>

      <CreateLink alignment="right" variant="primary" to={clientLinks.create}>
        Add Client
      </CreateLink>
      <Table
        tableData={[
          // @TODO: Fix 'id' required/partial later
          ...((tableData as unknown) as ReadonlyArray<
            Omit<Client, 'id'> & { readonly id: string }
          >),
        ]}
        sorting={true}
        pagination={true}
        headerNames={[
          'clientName',
          'contractType',
          'email',
          'numberOfEVS',
          'rateOfEVS',
          'assignedEVSHistory',
        ]}
        filterOption={[{ columnName: 'clientName', filterType: 'search' }]}
        actions={{
          editTo: id => clientLinks.edit(id),
        }}
        headerLabels={{
          numberOfEVS: 'No. of EVS',
          rateOfEVS: 'Rate of EVS',
        }}
      />
    </Section>
  )
})

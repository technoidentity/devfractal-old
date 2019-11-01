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
        tableData={[...tableData]}
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

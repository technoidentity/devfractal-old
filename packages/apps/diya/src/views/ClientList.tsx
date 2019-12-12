import React from 'react'
import { CreateLink, links, Section } from 'technoidentity-devfractal'
import { Client, ClientListResponse } from '../common'
import { Table } from '../reacttable/Table'

const clientLinks = links('clients')

export const ClientList = ({
  data: clientList,
}: {
  readonly data: ClientListResponse['data']['rows']
}) => {
  const tableData = clientList.map(data => ({
    ...data,
    actions: 'actions',
  }))
  return (
    <Section>
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
        headerNames={['name', 'email', 'billingType', 'numberOfEvsOrDrivers']}
        filterOption={[{ columnName: 'name', filterType: 'search' }]}
        actions={{
          editTo: id => clientLinks.edit(id),
          assignTo: id => `/clients/assignClient/${id}`,
        }}
        headerLabels={{
          name: 'Client Name',
          billingType: 'Billing Type',
          numberOfEvsOrDrivers: 'No. of EVS',
        }}
      />
    </Section>
  )
}

import React from 'react'
import { links, listComponent, Section } from 'technoidentity-devfractal'
import { Trip } from '../common'
import { HeadTitle } from '../components'
import { Table } from '../reacttable/Table'

const tripLinks = links('trips')

export const TripList = listComponent(Trip, ({ data: tripsList }) => {
  const tableData = tripsList.map(data => ({ ...data, actions: 'actions' }))
  return (
    <Section>
      <HeadTitle>View Trips</HeadTitle>
      <Table
        tableData={[...tableData]}
        sorting={true}
        pagination={true}
        headerNames={['customerName', 'address', 'contactNumber', 'status']}
        filterOption={[{ columnName: 'customerName', filterType: 'search' }]}
        actions={{
          editTo: id => tripLinks.edit(id),
        }}
      />
    </Section>
  )
})

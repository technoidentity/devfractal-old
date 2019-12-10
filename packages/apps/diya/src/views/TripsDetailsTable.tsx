import { links, listComponent } from 'devfractal-crud';
import { Section } from 'devfractal-ui-core';
import React from 'react';
import { Trip } from '../common';
import { HeadTitle } from '../components';
import { Table } from '../reacttable/Table';

const tripLinks = links('trips')

export const TripDetailsTable = listComponent(Trip, ({ data: tripsList }) => {
  const tableData = tripsList.map(data => ({ ...data, actions: 'actions' }))
  return (
    <Section>
      <HeadTitle>View Trips</HeadTitle>
      <Table
        tableData={[
          ...((tableData as unknown) as ReadonlyArray<
            Omit<Trip, 'id'> & { readonly id: string }
          >),
        ]}
        sorting={true}
        pagination={true}
        headerNames={['evId','tripId','date','startTime','clientName','companyDispatcher']}
        filterOption={[{ columnName: 'tripId', filterType: 'search' }]}
        actions={{
          editTo: id => tripLinks.edit(id),
        }}
      />
    </Section>
  )
})

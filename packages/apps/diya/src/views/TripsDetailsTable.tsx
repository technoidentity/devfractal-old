import { CreateLink, links } from 'devfractal-crud'
import { Column, Columns, Section } from 'devfractal-ui-core'
import React from 'react'
import { TripListResponse } from '../common'
import { Table } from '../reacttable/Table'

const tripLinks = links('trips')

export const TripDetailsTable = ({
  data,
}: {
  readonly data: TripListResponse['data']['rows']
}) => {
  const tableData = data.map(tripList => ({ ...tripList, actions: 'actions' }))
  return (
    <Section>
      <Columns>
        <Column>
          <CreateLink alignment="right" variant="primary" to={tripLinks.create}>
            Add Trip
          </CreateLink>
        </Column>
      </Columns>

      <Table
        tableData={[
          ...((tableData as unknown) as ReadonlyArray<
            Omit<TripListResponse, 'id'> & { readonly id: string }
          >),
        ]}
        sorting={true}
        pagination={true}
        headerNames={['evId', 'tripId', 'date', 'startTime', 'clientName']}
        filterOption={[{ columnName: 'tripId', filterType: 'search' }]}
      />
    </Section>
  )
}

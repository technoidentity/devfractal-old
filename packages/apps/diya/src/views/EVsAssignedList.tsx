import { Section } from 'devfractal-ui-core'
import React from 'react'
import { EVsAssignedResponse } from '../common'
import { Table } from '../reacttable/Table'

export const EVsAssignedList = ({
  data,
}: {
  readonly data: EVsAssignedResponse['data']['rows']
}) => {
  const tableData = data.map(evsAssignedList => ({
    ...evsAssignedList,
    actions: 'actions',
  }))
  return (
    <Section>
      <Table
        tableData={[
          ...((tableData as unknown) as ReadonlyArray<
            Omit<EVsAssignedResponse, 'id'> & { readonly id: string }
          >),
        ]}
        sorting={true}
        pagination={true}
        headerNames={['vehicleId', 'driverId']}
        // filterOption={[{ columnName: 'tripId', filterType: 'search' }]}
        actions={{
          addTrip: id => `/evs_assigned/addTrip/${id}`,
        }}
      />
    </Section>
  )
}

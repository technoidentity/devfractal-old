import React from 'react'
import {
  Column,
  Columns,
  CreateLink,
  links,
  // listComponent,
  Section,
} from 'technoidentity-devfractal'
import { http as httpAPI } from 'technoidentity-devfractal'
import { date } from 'technoidentity-utils'
import { DriverResponse } from '../common'
// import { Driver } from '../common'
import { HeadTitle } from '../components'
import { baseURL } from '../config'
import { Table } from '../reacttable/Table'
import { formatDate } from '../reacttable/utils'
const driverLinks = links('drivers')
const http = httpAPI({ baseURL })
async function onDelete(): Promise<void> {
  await http.del({ resource: 'drivers' })
}
// export const DriverList = listComponent(Driver, ({ data: driverList }) => {
export const DriverList1 = ({
  data,
}: {
  readonly data: DriverResponse['data']['rows']
}) => {
  const keys = data.length > 0 ? Object.keys(data[0]) : []
  const tableData =
    data.length > 0
      ? data.map(data =>
          keys.reduce(
            (acc, k) => ({
              ...acc,
              [k]: date.is(data[k]) ? formatDate(data[k]) : data[k],
              actions: 'actions',
            }),
            {},
          ),
        )
      : []
  return (
    <>
      <Section>
        <HeadTitle>Drivers</HeadTitle>
        <Columns>
          <Column>
            <CreateLink
              alignment="right"
              variant="primary"
              to={driverLinks.create}
            >
              Add Driver
            </CreateLink>
          </Column>
        </Columns>

        <Table
          tableData={[
            // @TODO: Fix 'id' required/partial later
            ...((tableData as unknown) as ReadonlyArray<
              Omit<any, 'id'> & { readonly id: string }
            >),
          ]}
          sorting={true}
          pagination={true}
          headerNames={['name', 'shift', 'verified']}
          filterOption={[
            { columnName: 'name', filterType: 'search' },
            { columnName: 'shift', filterType: 'select' },
          ]}
          actions={{
            editTo: id => driverLinks.edit(id),
            assignTo: id => `/assignDriver/${id}`,
            onDelete,
          }}
        />
      </Section>
    </>
  )
}

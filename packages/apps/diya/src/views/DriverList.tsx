import React from 'react'
import {
  Column,
  Columns,
  CreateLink,
  links,
  listComponent,
  Section,
} from 'technoidentity-devfractal'
import { http as httpAPI } from 'technoidentity-devfractal'
import { date } from 'technoidentity-utils'
import { Driver } from '../common'
import { HeadTitle } from '../components'
import { baseURL } from '../config'
import { Table } from '../reacttable/Table'
import { formatDate } from '../reacttable/utils'
const driverLinks = links('drivers')
const http = httpAPI({ baseURL })
async function onDelete(): Promise<void> {
  await http.del({ resource: 'drivers' })
}
export const DriverList = listComponent(Driver, ({ data: driverList }) => {
  const keys = Object.keys(driverList[0])
  const tableData = driverList.map(driverList =>
    keys.reduce(
      (acc, k) => ({
        ...acc,
        [k]: date.is(driverList[k]) ? formatDate(driverList[k]) : driverList[k],
        actions: 'actions',
      }),
      {},
    ),
  )
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
              Omit<Driver, 'id'> & { readonly id: string }
            >),
          ]}
          sorting={true}
          pagination={true}
          headerNames={['name', 'lastActive', 'shift', 'status']}
          filterOption={[
            { columnName: 'name', filterType: 'search' },
            { columnName: 'shift', filterType: 'select' },
            { columnName: 'status', filterType: 'select' },
            { columnName: 'lastActive', filterType: 'date' },
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
})

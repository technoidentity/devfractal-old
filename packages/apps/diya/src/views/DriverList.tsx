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
import { Driver } from '../common'
import { HeadTitle } from '../components'
import { baseURL } from '../config'
import { Table } from '../reacttable/Table'
const driverLinks = links('drivers')
const http = httpAPI({ baseURL })
async function onDelete(): Promise<void> {
  // TODO: Shouldn't this be 'session' instead of 'logout'?
  await http.del({ resource: 'logout' })
}
export const DriverList = listComponent(Driver, ({ data: driverList }) => {
  const tableData = driverList.map(data => ({ ...data, actions: 'actions' }))

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
          tableData={[...tableData]}
          sorting={true}
          pagination={true}
          headerNames={['name', 'lastActive', 'shift', 'status']}
          filterOption={[
            { columnName: 'name', filterType: 'search' },
            { columnName: 'shift', filterType: 'select' },
            { columnName: 'status', filterType: 'select' },
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

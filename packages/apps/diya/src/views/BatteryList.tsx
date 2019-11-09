import { date } from 'io-ts-types/lib/date'
import React from 'react'
import {
  CreateLink,
  links,
  // listComponent,
  Section,
  Title,
} from 'technoidentity-devfractal'
import { BatteryResponse } from '../common'
// import { Battery } from '../common'
import { Table } from '../reacttable/Table'
import { formatDate } from '../reacttable/utils'

const batteryLinks = links('batteries')

// export const BatteryList = listComponent(Battery, ({ data: batteryList }) => {
export const BatteryList = ({
  data,
}: {
  readonly data: BatteryResponse['data']['rows']
}) => {
  const keys = data.length > 0 ? Object.keys(data[0]) : []
  const tableData =
    data.length > 0
      ? data.map((batteryList: any) =>
          keys.reduce(
            (acc, k) => ({
              ...acc,
              [k]: date.is(batteryList[k])
                ? formatDate(batteryList[k])
                : batteryList[k],
              actions: 'actions',
            }),
            {},
          ),
        )
      : []
  return (
    <Section>
      <Title size="4" textColor="info">
        Batteries
      </Title>
      <CreateLink alignment="right" variant="primary" to={batteryLinks.create}>
        Add Battery
      </CreateLink>
      <Table
        tableData={[
          // @TODO: Fix 'id' required/partial later
          ...((tableData as unknown) as ReadonlyArray<
            Omit<any, 'id'> & { readonly id: string }
          >),
        ]}
        sorting={true}
        pagination={true}
        headerNames={['batteryName', 'cycles', 'status']}
        headerLabels={{
          batteryName: 'Name',
          cycles: 'Battery Cycles',
        }}
        filterOption={[
          { columnName: 'batteryName', filterType: 'search' },
          { columnName: 'status', filterType: 'select' },
        ]}
        actions={{
          editTo: id => batteryLinks.edit(id),
          assignTo: id => `assignBattery/${id}`,
        }}
      />
    </Section>
  )
}

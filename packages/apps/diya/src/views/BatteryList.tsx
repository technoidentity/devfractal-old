import React from 'react'
import {
  CreateLink,
  links,
  // listComponent,
  Section,
  Title,
} from 'technoidentity-devfractal'
// import { Battery } from '../common'
import { Table } from '../reacttable/Table'

const batteryLinks = links('batteries')

// export const BatteryList = listComponent(Battery, ({ data: batteryList }) => {
export const BatteryList = ({ data }: { readonly data: any }) => {
  const tableData = data.map((data: any) => ({ ...data, actions: 'actions' }))
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
        filterOption={[{ columnName: 'batteryName', filterType: 'search' }]}
        actions={{
          editTo: id => batteryLinks.edit(id),
          assignTo: id => `assignBattery/${id}`,
        }}
      />
    </Section>
  )
}

import { Input, Section } from 'devfractal-ui-core'
import React from 'react'
import { useAuth } from '../../auth/AuthContext'
import { Table } from '../../reacttable/Table'

// tslint:disable-next-line:readonly-array
const data = [
  {
    id: '1',
    batteryId: '1385',
    assignedEv: 'NA',
    chargingLocation: 'NA',
    wareHouse: 'Madhapur',
  },
  {
    id: '2',
    batteryId: '4456',
    assignedEv: 'auto 542',
    chargingLocation: 'NA',
    wareHouse: 'NA',
  },
]

export const BatteryDayWiseReport: React.FC = () => {
  const { setHeaderText } = useAuth()
  setHeaderText('Battery Reports > Day wise Report')

  return (
    <>
      <Section>
        <Input type="date" style={{ width: '200px' }} />
      </Section>
      <Table
        tableData={data}
        pagination={true}
        sorting={false}
        headerNames={[
          'batteryId',
          'assignedEv',
          'chargingLocation',
          'wareHouse',
        ]}
        headerLabels={{
          batteryId: 'Battery ID',
          assignedId: 'Assigned ID',
          assignedEv: 'Assigned EV',
          chargingLocation: 'Charging Location',
          warehouse: 'Warehouse',
        }}
      />
    </>
  )
}

import React from 'react'
import { useAuth } from '../../auth/AuthContext'
import { Table } from '../../reacttable/Table'

// tslint:disable-next-line:readonly-array
const data = [
  {
    id: '1',
    batteryId: 1385,
    chargeRemaining: 45,
    cyclesRemaining: 345 / 500,
  },
  {
    id: '2',
    batteryId: 1386,
    chargeRemaining: 44,
    cyclesRemaining: 345 / 500,
  },
  {
    id: '3',
    batteryId: 1387,
    chargeRemaining: 43,
    cyclesRemaining: 340 / 500,
  },
]

export const BatteryStatusReport: React.FC = () => {
  const { setHeaderText } = useAuth()
  setHeaderText('Battery Reports > Status Report')

  return (
    <Table
      tableData={data}
      pagination={true}
      sorting={false}
      headerNames={['batteryId', 'chargeRemaining', 'cyclesRemaining']}
      headerLabels={{
        batteryId: 'Battery ID',
        chargeRemaining: 'Charge Remaining(%)',
        cyclesRemaining: 'Cycle Remaining',
      }}
    />
  )
}

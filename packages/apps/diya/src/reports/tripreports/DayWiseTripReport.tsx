import { Input, Section } from 'devfractal-ui-core'
import React from 'react'
import { useAuth } from '../../auth/AuthContext'
import { Table } from '../../reacttable/Table'

// tslint:disable-next-line:readonly-array
const data = [
  {
    id: '1',
    evId: '245',
    area: 'vivekananda nagar',
    kmsTravelled: '20',
    client: 'shree india company',
    noOfDeliveries: '18',
  },
  {
    id: '2',
    evId: '246',
    area: 'vivekananda nagar',
    kmsTravelled: '20',
    client: 'shree india company',
    noOfDeliveries: '18',
  },
  {
    id: '3',
    evId: '243',
    area: 'vivekananda nagar',
    kmsTravelled: '20',
    client: 'shree india company',
    noOfDeliveries: '18',
  },
]

export const DayWiseTripReport: React.FC = () => {
  const { setHeaderText } = useAuth()
  setHeaderText('Trip Reports > Day wise Report')
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
          'evId',
          'area',
          'kmsTravelled',
          'client',
          'noOfDeliveries',
        ]}
        headerLabels={{
          EvId: 'EV ID',
          area: 'Area',
          kmsTravelled: 'Kms Travelled',
          client: 'Client',
          noOfDeliveries: 'No.of.Deliveries',
        }}
      />
    </>
  )
}

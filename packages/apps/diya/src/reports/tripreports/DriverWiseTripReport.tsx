import { faCalendar, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Columns, Icon, Input, Select, Text } from 'devfractal-ui-core'
import React from 'react'
import { useAuth } from '../../auth/AuthContext'
import { Table } from '../../reacttable/Table'

export const DriverWiseTripReport: React.FC = () => {
  const { setHeaderText } = useAuth()
  setHeaderText('Trip Reports > Driver Wise Report')

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

  return (
    <>
      <Columns style={{ paddingLeft: '40px', marginTop: '10px' }}>
        <Icon
          color="#2c7dc0"
          style={{ marginTop: '-1px', marginLeft: '15px' }}
          icon={faUserCircle}
        />
        <Text style={{ color: '#2c7dc0', marginLeft: '8px' }}>
          Driver Name :{' '}
        </Text>{' '}
        <Text>Ramesh Kumar </Text>
        <Icon
          color="#2c7dc0"
          style={{ marginTop: '-1px', marginLeft: '15px' }}
          icon={faCalendar}
        />
        <Text style={{ color: '#2c7dc0', marginLeft: '8px' }}>Date- </Text>{' '}
        <Text>11/11/2019 </Text>
        <Select name="select other driver" style={{ marginLeft: '500px' }}>
          <option value="select driver">select driver</option>
        </Select>
        <Input type="date" style={{ marginLeft: '40px' }} />
      </Columns>
      <Table
        tableData={data}
        sorting={false}
        pagination={true}
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

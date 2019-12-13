import {
  faCalendar,
  faMapMarker,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { Columns, Icon, Input, Select, Text } from 'devfractal-ui-core'
import React from 'react'
import { useAuth } from '../../auth/AuthContext'
import { Table } from '../../reacttable/Table'

export const DriverTripReport: React.FC = () => {
  const { setHeaderText } = useAuth()
  setHeaderText('Driver Reports > Trip Report')

  const data = [
    {
      id: '1',
      noOfCustomers: 10,
      start: '14/08/2019',
      end: '14/08/2019',
      successfulDeliveries: 10,
      cashCollected: 450000,
    },
    {
      id: '2',
      noOfCustomers: 12,
      start: '14/08/2019',
      end: '14/08/2019',
      successfulDeliveries: 12,
      cashCollected: 450000,
    },
    {
      id: '3',
      noOfCustomers: 13,
      start: '14/08/2019',
      end: '14/08/2019',
      successfulDeliveries: 13,
      cashCollected: 450000,
    },
    {
      id: '4',
      noOfCustomers: 14,
      start: '14/08/2019',
      end: '14/08/2019',
      successfulDeliveries: 14,
      cashCollected: 450000,
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
          Driver Name -{' '}
        </Text>{' '}
        <Text>Ramesh Kumar </Text>
        <Icon
          color="#2c7dc0"
          style={{ marginTop: '-1px', marginLeft: '15px' }}
          icon={faUserCircle}
        />
        <Text style={{ color: '#2c7dc0', marginLeft: '8px' }}>
          Client Name -{' '}
        </Text>{' '}
        <Text>Amazon </Text>
        <Icon
          color="#2c7dc0"
          style={{ marginTop: '-1px', marginLeft: '15px' }}
          icon={faMapMarker}
        />
        <Text style={{ color: '#2c7dc0', marginLeft: '8px' }}>Trip ID -</Text>{' '}
        <Text style={{ paddingLeft: '10px' }}>452</Text>
        <Select name="select client" style={{ marginLeft: '40px' }}>
          <option value="select client">select client</option>
        </Select>
        <Input
          rightIcon={faCalendar}
          placeholder="12/12/2019"
          style={{ marginLeft: '40px' }}
        />
      </Columns>
      <Table
        tableData={data}
        sorting={false}
        pagination={true}
        headerNames={[
          'id',
          'noOfCustomers',
          'start',
          'end',
          'successfulDeliveries',
          'cashCollected',
        ]}
        headerLabels={{
          id: 'ID',
          noOfCustomers: 'No Of Customers',
          start: 'Start',
          end: 'End',
          successfulDeliveries: 'Successful Deliveries',
          cashCollected: 'Cash Collected',
        }}
      />
    </>
  )
}

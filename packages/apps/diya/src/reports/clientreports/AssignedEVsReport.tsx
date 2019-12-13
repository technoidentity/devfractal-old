import {
  faCalendar,
  faCar,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { Columns, Icon, Input, Select, Text } from 'devfractal-ui-core'
import React from 'react'
import { useAuth } from '../../auth/AuthContext'
import { Table } from '../../reacttable/Table'

export const AssignedEVsReport: React.FC = () => {
  const { setHeaderText } = useAuth()
  setHeaderText('Client Reports > Assigned EVs Report')

  const data = [
    {
      id: '1',
      evID: '1',
      Driver: 'Suresh Kumar',
      Associate: 'Srinivas Raju',
      Status: 'completed',
    },
    {
      id: '2',
      evID: '1',
      Driver: 'Suresh Kumar',
      Associate: 'Srinivas Raju',
      Status: 'completed',
    },
    {
      id: '3',
      evID: '1',
      Driver: 'Suresh Kumar',
      Associate: 'Srinivas Raju',
      Status: 'completed',
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
          Client Name -{' '}
        </Text>{' '}
        <Text>Amazon </Text>
        <Icon
          color="#2c7dc0"
          style={{ marginTop: '-1px', marginLeft: '15px' }}
          icon={faCar}
        />
        <Text style={{ color: '#2c7dc0', marginLeft: '8px' }}>EVs -</Text>{' '}
        <Text style={{ paddingLeft: '10px' }}>2 </Text>
        <Icon
          color="#2c7dc0"
          style={{ marginTop: '-1px', marginLeft: '15px' }}
          icon={faCalendar}
        />
        <Text style={{ color: '#2c7dc0', marginLeft: '8px' }}>Date -</Text>
        <Text style={{ paddingLeft: '10px' }}>18/9/2019 </Text>
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
        sorting={true}
        pagination={true}
        headerNames={['evID', 'Driver', 'Associate', 'Status']}
      />
    </>
  )
}

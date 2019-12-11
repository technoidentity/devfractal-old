import {
  faCalendar,
  faCar,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { Columns, Icon, Text } from 'devfractal-ui-core'
import React from 'react'
// import { HeadTitle } from '../../components'
import { Table } from '../../reacttable/Table'

export const AssignedEVsReport: React.FC = () => {
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
      {/* <HeadTitle> Client Reports > Assigned EVs Report</HeadTitle> */}
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

import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Box, Columns, Icon, Select, Text } from 'devfractal-ui-core'
import React from 'react'
import { HeadTitle } from '../../components'
import { Table } from '../../reacttable/Table'

export const DriverBehaviourReport = () => {
  const data = [
    {
      id: '1',
      exceptionName: 'SpeedChange',
      occurrenceBy: '18/08/2019',
      occurrenceTime: '4:30pm',
    },
    {
      id: '2',
      exceptionName: 'Left Geo Fence',
      occurrenceBy: '18/08/2019',
      occurrenceTime: '4:30pm',
    },
    {
      id: '2',
      exceptionName: 'Leaves in past 30 days',
      occurrenceBy: '18/08/2019',
      occurrenceTime: '4:30pm',
    },
  ]
  return (
    <>
      <Box style={{ backgroundColor: '#87CEFA' }}>
        <HeadTitle> Driver Reports > Behaviour Report</HeadTitle>
      </Box>
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
        <Select name="select client" style={{ marginLeft: '700px' }}>
          <option value="select client">select client</option>
        </Select>
      </Columns>
      <Table
        tableData={data}
        pagination={true}
        sorting={false}
        headerNames={['exceptionName', 'occurrenceBy', 'occurrenceTime']}
        headerLabels={{
          exceptionName: 'Exception Name',
          occurrenceBy: 'Occurrence By',
          occurrenceTime: 'Occurrence Time',
        }}
      />
    </>
  )
}

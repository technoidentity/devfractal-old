import {
  faCar,
  faMarker,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { Columns, Icon, Input, Select, Text } from 'devfractal-ui-core'
import React from 'react'
import { useAuth } from '../../auth/AuthContext'
import { Table } from '../../reacttable/Table'

// tslint:disable-next-line:readonly-array
const data = [
  {
    id: '1',
    evId: '245',
    kmsTravelled: '20',
    noOfDeliveries: '18',
  },
]

export const ClientWiseTripReport: React.FC = () => {
  const { setHeaderText } = useAuth()
  setHeaderText('Trip Reports > Client Wise Report')
  return (
    <>
      <Columns style={{ paddingLeft: '40px', marginTop: '10px' }}>
        <Icon
          color="#2c7dc0"
          style={{ marginTop: '-1px', marginLeft: '15px' }}
          icon={faUserCircle}
        />
        <Text style={{ color: '#2c7dc0', marginLeft: '8px' }}>Client: </Text>{' '}
        <Text>Amazon </Text>
        <Icon
          color="#2c7dc0"
          style={{ marginTop: '-1px', marginLeft: '15px' }}
          icon={faCar}
        />
        <Text style={{ color: '#2c7dc0', marginLeft: '8px' }}>Location:</Text>{' '}
        <Text style={{ paddingLeft: '10px' }}>banjarahills </Text>
        <Icon
          color="#2c7dc0"
          style={{ marginTop: '-1px', marginLeft: '15px' }}
          icon={faMarker}
        />
        <Text style={{ color: '#2c7dc0', marginLeft: '8px' }}>Date:</Text>
        <Text style={{ paddingLeft: '10px' }}>18/9/2019 </Text>
        <Select name="select client" style={{ marginLeft: '40px' }}>
          <option value="select client">select client</option>
        </Select>
        <Select name="select location" style={{ marginLeft: '40px' }}>
          <option value="select client">select location</option>
        </Select>
        <Input type="date" style={{ marginLeft: '40px' }} />
      </Columns>

      <Table
        tableData={data}
        sorting={false}
        pagination={true}
        headerNames={['evId', 'kmsTravelled', 'noOfDeliveries']}
        headerLabels={{
          evId: 'EV ID',
          kmsTravelled: 'Kms Travelled',
          noOfDeliveries: 'No.of.Deliveries',
        }}
      />
    </>
  )
}

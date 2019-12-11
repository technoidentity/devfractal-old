import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import {
  Box,
  Card,
  CardContent,
  Column,
  Columns,
  Input,
  Section,
  Select,
} from 'devfractal-ui-core'
import React from 'react'
import { HeadTitle } from '../../components'
import { Table } from '../../reacttable/Table'

// tslint:disable-next-line:readonly-array
const fakeData = [
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

export const DriverTripReport: React.FC = () => (
  <>
    <HeadTitle>
      <Section>Driver Reports > Trip Report</Section>{' '}
    </HeadTitle>
    <Card>
      <Columns>
        <Column>
          <Box>
            <Columns>
              <Column>Driver-Ramesh</Column>
              <Column>Client Name: Amazon</Column>
              <Column>TripID-452</Column>
              <Column>
                <Select name="select client">
                  <option value="select client">select client</option>
                </Select>
              </Column>
              <Column>
                <Input rightIcon={faCalendar} placeholder="12/12/2019" />
              </Column>
            </Columns>
          </Box>
          <CardContent>
            <Table
              tableData={fakeData}
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
          </CardContent>
        </Column>
      </Columns>
    </Card>
  </>
)

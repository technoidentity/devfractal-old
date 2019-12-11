import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import {
  Box,
  Card,
  CardContent,
  Column,
  Columns,
  Input,
  Section,
} from 'devfractal-ui-core'
import React from 'react'
import { HeadTitle } from '../../components'
import { Table } from '../../reacttable/Table'

// tslint:disable-next-line:readonly-array
export const fakeData = [
  {
    id: '1',
    evId: '1',
    clientName: 'diya',
    driverName: 'diya',
    assignedDate: '14/08/2019',
  },
  {
    id: '2',
    evId: '2',
    clientName: 'diya',
    driverName: 'diya',
    assignedDate: '14/08/2019',
  },
  {
    id: '3',
    evId: '3',
    clientName: 'diya',
    driverName: 'diya',
    assignedDate: '14/08/2019',
  },
]

export const DriverDataReport: React.FC = () => (
  <>
    <HeadTitle>
      {' '}
      <Section>Driver Reports > Data Report</Section>
    </HeadTitle>
    <Section>
      <Card>
        <Columns>
          <Column>
            <Box>
              <Columns>
                <Column>
                  <Input rightIcon={faCalendar} placeholder="12/12/2019" />
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
                  'driverName',
                  'id',
                  'clientName',
                  'evId',
                  'assignedDate',
                ]}
                headerLabels={{
                  driverName: 'Driver Name',
                  id: 'ID',
                  clientName: 'Client Name',
                  evId: 'EV ID',
                  assignedDate: 'Assigned Date',
                }}
              />
            </CardContent>
          </Column>
        </Columns>
      </Card>
    </Section>
  </>
)

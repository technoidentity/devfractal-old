import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { Box, Column, Columns, Input } from 'devfractal-ui-core'
import React from 'react'
import { useAuth } from '../../auth/AuthContext'
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

export const DriverDataReport: React.FC = () => {
  const { setHeaderText } = useAuth()
  setHeaderText('Driver Reports > Data Report')

  return (
    <>
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
        </Column>
      </Columns>
    </>
  )
}

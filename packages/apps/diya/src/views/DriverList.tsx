import React, { useState } from 'react'
import {
  Column,
  Columns,
  CreateLink,
  links,
  // listComponent,
  Section,
} from 'technoidentity-devfractal'
import { date } from 'technoidentity-utils'
import { useAuth } from '../auth/AuthContext'
import { DriverData1, DriverListResponse } from '../common'
import { DeleteConfirmation } from '../components/DeleteConfirmation'
import { deleteList, getDriverList } from '../pages'
import { Table } from '../reacttable/Table'
import { formatDate } from '../reacttable/utils'
const driverLinks = links('drivers')

export const DriverList1 = ({
  data,
}: {
  readonly data: DriverListResponse['data']['rows']
}) => {
  const { logout, setUser, setHeaderText } = useAuth()
  const [state, setState] = useState({ isOpen: false, id: '' })
  const [resultData, setResultData] = useState<
    DriverListResponse['data']['rows']
  >([])
  const [useResultData, setUseResultData] = useState(false)

  const handleToggleModel = (id: string) => {
    setState({ isOpen: !state.isOpen, id })
  }
  const handleDriverList = async () => {
    const resultData = await getDriverList({ setUser, logout, setHeaderText })
    setUseResultData(true)
    setResultData(resultData)
    setState({ isOpen: false, id: state.id })
  }

  const keys = useResultData
    ? resultData.length > 0
      ? Object.keys(resultData[0])
      : []
    : data.length > 0
    ? Object.keys(data[0])
    : []
  const tableData = useResultData
    ? resultData.length > 0
      ? resultData.map((driverList: DriverData1) =>
          keys.reduce(
            (acc, k) => ({
              ...acc,
              [k]: date.is(driverList[k])
                ? formatDate(driverList[k])
                : driverList[k],
              verified: driverList.verified ? 'verified' : 'pending',
              actions: 'actions',
            }),
            {},
          ),
        )
      : []
    : data.length > 0
    ? data.map((driverList: DriverData1) =>
        keys.reduce(
          (acc, k) => ({
            ...acc,
            [k]: date.is(driverList[k])
              ? formatDate(driverList[k])
              : driverList[k],
            verified: driverList.verified ? 'verified' : 'pending',
            actions: 'actions',
          }),
          {},
        ),
      )
    : []
  return (
    <>
      <Section>
        <DeleteConfirmation
          setState={setState}
          state={state}
          deleteAsyncFun={(url, message) =>
            deleteList(url, message, { setUser, logout })
          }
          handleGetList={handleDriverList}
          url={`users/${state.id}`}
          message="Driver Deleted"
        />
        <Columns>
          <Column>
            <CreateLink
              alignment="right"
              variant="primary"
              to={driverLinks.create}
            >
              Add Driver
            </CreateLink>
          </Column>
        </Columns>

        <Table
          tableData={[
            // @TODO: Fix 'id' required/partial later
            ...((tableData as unknown) as ReadonlyArray<
              Omit<any, 'id'> & { readonly id: string }
            >),
          ]}
          sorting={true}
          pagination={true}
          headerNames={['identificationNum', 'name', 'shift', 'verified']}
          filterOption={[
            { columnName: 'name', filterType: 'search' },
            { columnName: 'shift', filterType: 'select' },
          ]}
          headerLabels={{
            identificationNum: 'ID',
          }}
          actions={{
            editTo: id => driverLinks.edit(id),
            assignTo: id => `/drivers/assignDriver/${id}`,
            onDelete: handleToggleModel,
          }}
        />
      </Section>
    </>
  )
}

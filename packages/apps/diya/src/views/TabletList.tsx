import React, { useState } from 'react'
import {
  Column,
  Columns,
  CreateLink,
  links,
  Section,
} from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import { TabletData1, TabletListResponse } from '../common'
import { DeleteConfirmation } from '../components/DeleteConfirmation'
import { deleteList } from '../pages'
import { getTabletList } from '../pages/TabletFormRoute'
import { Table } from '../reacttable/Table'

const tabletLink = links('tablets')

export const TabletList = ({
  data,
}: {
  readonly data: TabletListResponse['data']['rows']
}) => {
  const { logout, setUser, setHeaderText } = useAuth()
  const [state, setState] = useState({ isOpen: false, id: '' })
  const [resultData, setResultData] = useState<
    TabletListResponse['data']['rows']
  >([])

  const [useResultData, setUseResultData] = useState(false)

  const handleToggleModel = (id: string) => {
    setState({ isOpen: !state.isOpen, id })
  }
  const handleTabletList = async () => {
    const resultData = await getTabletList({ setUser, logout, setHeaderText })
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
      ? resultData.map((tabletList: TabletData1) =>
          keys.reduce(
            (acc, k) => ({
              ...acc,
              [k]: tabletList[k],
              actions: 'actions',
            }),
            {},
          ),
        )
      : []
    : data.length > 0
    ? data.map((tabletList: TabletData1) =>
        keys.reduce(
          (acc, k) => ({
            ...acc,
            [k]: tabletList[k],
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
          handleGetList={handleTabletList}
          url={`tablets/${state.id}`}
          message="Tablet Deleted"
        />
        <Columns>
          <Column>
            <CreateLink
              alignment="right"
              variant="primary"
              to={tabletLink.create}
            >
              Add Tablet
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
          headerNames={['androidDeviceId', 'vehicleName']}
          filterOption={[
            { columnName: 'androidDeviceId', filterType: 'search' },
            { columnName: 'vehicleName', filterType: 'search' },
          ]}
          actions={{
            editTo: id => tabletLink.edit(id),
            onDelete: handleToggleModel,
          }}
        />
      </Section>
    </>
  )
}

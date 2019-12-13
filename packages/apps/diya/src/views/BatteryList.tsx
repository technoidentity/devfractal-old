import { date } from 'io-ts-types/lib/date'
import React, { useState } from 'react'
import { CreateLink, links, Section } from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import { BatteryData1, BatteryResponse } from '../common'
import { DeleteConfirmation } from '../components/DeleteConfirmation'
import { deleteList, getBatteryList } from '../pages'
import { Table } from '../reacttable/Table'
import { formatDate } from '../reacttable/utils'

const batteryLinks = links('batteries')

export const BatteryList = ({
  data,
}: {
  readonly data: BatteryResponse['data']['rows']
}) => {
  const { logout, setUser, setHeaderText } = useAuth()
  const [state, setState] = useState({ isOpen: false, id: '' })
  const [resultData, setResultData] = useState<BatteryResponse['data']['rows']>(
    [],
  )
  const [useResultData, setUseResultData] = useState(false)

  const handleToggleModel = (id: string) => {
    setState({ isOpen: !state.isOpen, id })
  }

  const handleBatteryList = async () => {
    const resultData = await getBatteryList({ setUser, logout, setHeaderText })
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
      ? resultData.map((batteryList: BatteryData1) =>
          keys.reduce(
            (acc, k) => ({
              ...acc,
              [k]: date.is(batteryList[k])
                ? formatDate(batteryList[k])
                : batteryList[k],
              actions: 'actions',
            }),
            {},
          ),
        )
      : []
    : data.length > 0
    ? data.map((batteryList: BatteryData1) =>
        keys.reduce(
          (acc, k) => ({
            ...acc,
            [k]: date.is(batteryList[k])
              ? formatDate(batteryList[k])
              : batteryList[k],
            actions: 'actions',
          }),
          {},
        ),
      )
    : []

  return (
    <Section>
      <DeleteConfirmation
        setState={setState}
        state={state}
        deleteAsyncFun={(url, message) =>
          deleteList(url, message, { setUser, logout })
        }
        handleGetList={handleBatteryList}
        url={`batteries/${state.id}`}
        message="Battery Deleted"
      />

      <CreateLink alignment="right" variant="primary" to={batteryLinks.create}>
        Add Battery
      </CreateLink>
      <Table
        tableData={[
          // @TODO: Fix 'id' required/partial later
          ...((tableData as unknown) as ReadonlyArray<
            Omit<any, 'id'> & { readonly id: string }
          >),
        ]}
        sorting={true}
        pagination={true}
        headerNames={['batteryName', 'batterySerialNum', 'cycles', 'status']}
        headerLabels={{
          batteryName: 'Name',
          batterySerialNum: 'Serial Number',
          cycles: 'Battery Cycles',
        }}
        filterOption={[
          { columnName: 'batteryName', filterType: 'search' },
          { columnName: 'status', filterType: 'select' },
        ]}
        actions={{
          editTo: id => batteryLinks.edit(id),
          onDelete: handleToggleModel,
        }}
      />
    </Section>
  )
}

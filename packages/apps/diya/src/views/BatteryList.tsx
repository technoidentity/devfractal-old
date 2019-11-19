import { date } from 'io-ts-types/lib/date'
import React, { useState } from 'react'
import {
  CreateLink,
  links,
  // listComponent,
  Section,
  Title,
} from 'technoidentity-devfractal'
import { BatteryData1, BatteryResponse } from '../common'
import { DeleteConfirmation } from '../components/DeleteConfirmation'
import { deleteList, getBatteryList } from '../pages'
// import { Battery } from '../common'
import { Table } from '../reacttable/Table'
import { formatDate } from '../reacttable/utils'

const batteryLinks = links('batteries')

// export const BatteryList = listComponent(Battery, ({ data: batteryList }) => {
export const BatteryList = ({
  data,
}: {
  readonly data: BatteryResponse['data']['rows']
}) => {
  const [state, setState] = useState({ isOpen: false, id: '' })
  const [resultData, setResultData] = useState<BatteryResponse['data']['rows']>(
    [],
  )
  const [useResultData, setUseResultData] = useState(false)

  const handleToggleModel = (id: string) => {
    setState({ isOpen: !state.isOpen, id })
  }

  const handleBatteryList = async () => {
    const resultData = await getBatteryList()
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
        deleteAsyncFun={deleteList}
        handleGetList={handleBatteryList}
        url={`batteries/${state.id}`}
        message="Battery Deleted"
      />
      <Title size="4" textColor="info">
        Batteries
      </Title>
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
        headerNames={['batterySerialNum', 'cycles', 'status']}
        headerLabels={{
          batterySerialNum: 'Name',
          cycles: 'Battery Cycles',
        }}
        filterOption={[
          { columnName: 'batteryName', filterType: 'search' },
          { columnName: 'status', filterType: 'select' },
        ]}
        actions={{
          editTo: id => batteryLinks.edit(id),
          assignTo: id => `assignBattery/${id}`,
          onDelete: handleToggleModel,
        }}
      />
    </Section>
  )
}

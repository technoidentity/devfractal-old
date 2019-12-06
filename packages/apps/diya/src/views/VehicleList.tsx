import { date } from 'io-ts-types/lib/date'
import React, { useState } from 'react'
import { CreateLink, links, Section } from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import { VehicleData, VehicleResponse } from '../common'
// import { Vehicle } from '../common'
import { HeadTitle } from '../components'
import { DeleteConfirmation } from '../components/DeleteConfirmation'
import { deleteList, getVehicleList } from '../pages'
import { Table } from '../reacttable/Table'
import { formatDate } from '../reacttable/utils'

const vehicleLinks = links('vehicles')

// export const VehicleList = listComponent(Vehicle, ({ data: vehicleList }) => {
//   return (
//     <Section>
//       <HeadTitle>Vehicles</HeadTitle>

//       <CreateLink alignment="right" variant="primary" to={vehicleLinks.create}>
//         Add Vehicle
//       </CreateLink>

//       <DiyaTable
//         data={vehicleList}
//         // select={[
//         //   'vehicleName',
//         //   'numberPlate',
//         //   'group',
//         //   'nextService',
//         //   'insuranceDue',
//         //   'status',
//         // ]}
//         editTo={v => vehicleLinks.edit(v.id)}
//         assignTo={v => `/assignVehicle/${v.id}`}
//       />
//       <RoutedPager />
//     </Section>
//   )
// })

export const VehicleList1 = ({
  data,
}: {
  readonly data: VehicleResponse['data']['rows']
}) => {
  const { logout, setUser } = useAuth()
  const [state, setState] = useState({ isOpen: false, id: '' })
  const [resultData, setResultData] = useState<VehicleResponse['data']['rows']>(
    [],
  )
  const [useResultData, setUseResultData] = useState(false)

  const handleToggleModel = (id: string) => {
    setState({ isOpen: !state.isOpen, id })
  }

  const handleVehicleList = async () => {
    const resultData = await getVehicleList({ setUser, logout })
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
      ? resultData.map((vehicalList: VehicleData) =>
          keys.reduce(
            (acc, k) => ({
              ...acc,
              [k]: date.is(vehicalList[k])
                ? formatDate(vehicalList[k])
                : vehicalList[k],
              actions: 'actions',
            }),
            {},
          ),
        )
      : []
    : data.length > 0
    ? data.map((vehicalList: VehicleData) =>
        keys.reduce(
          (acc, k) => ({
            ...acc,
            [k]: date.is(vehicalList[k])
              ? formatDate(vehicalList[k])
              : vehicalList[k],
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
        handleGetList={handleVehicleList}
        url={`vehicles/${state.id}`}
        message="Vehicle Deleted"
      />
      <HeadTitle>Vehicles</HeadTitle>

      <CreateLink alignment="right" variant="primary" to={vehicleLinks.create}>
        Add Vehicle
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
        headerNames={[
          'vehicleName',
          'registrationNumber',
          'insuranceExpiry',
          'lastService',
          'status',
        ]}
        headerLabels={{ vehicleName: 'Name' }}
        filterOption={[
          { columnName: 'vehicleName', filterType: 'search' },
          { columnName: 'status', filterType: 'select' },
        ]}
        actions={{
          editTo: id => vehicleLinks.edit(id),
          assignTo: id => `/vehicles/assignVehicle/${id}`,
          onDelete: handleToggleModel,
        }}
      />
    </Section>
  )
}

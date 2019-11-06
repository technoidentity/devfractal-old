import { History } from 'history'
import { date } from 'io-ts-types/lib/date'
import React from 'react'
import {
  CreateLink,
  links,
  Section,
  useHistory,
} from 'technoidentity-devfractal'
import { VehicleResponse } from '../common'
// import { Vehicle } from '../common'
import { HeadTitle } from '../components'
import { deleteVehicle } from '../pages'
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
  const history: History = useHistory()
  const keys = data.length > 0 ? Object.keys(data[0]) : []
  const tableData =
    data.length > 0
      ? data.map((vehicalList: any) =>
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
        ]}
        filterOption={[{ columnName: 'name', filterType: 'search' }]}
        actions={{
          editTo: id => vehicleLinks.edit(id),
          assignTo: id => `/assignVehicle/${id}`,
          onDelete: id => deleteVehicle(id, history),
        }}
      />
    </Section>
  )
}

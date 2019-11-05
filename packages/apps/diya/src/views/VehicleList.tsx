import React from 'react'
import {
  CreateLink,
  links,
  // listComponent,
  RoutedPager,
  Section,
} from 'technoidentity-devfractal'
import { VehicleResponse } from '../common'
import { HeadTitle } from '../components'
import { DiyaTable } from '../components/DiyaTable'

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
  return (
    <Section>
      <HeadTitle>Vehicles</HeadTitle>

      <CreateLink alignment="right" variant="primary" to={vehicleLinks.create}>
        Add Vehicle
      </CreateLink>

      <DiyaTable
        data={data}
        select={[
          'vehicleName',
          'registrationNumber',
          'insuranceExpiry',
          'lastService',
          'status',
        ]}
        editTo={v => vehicleLinks.edit(v.id)}
        assignTo={v => `/assignVehicle/${v.id}`}
      />
      <RoutedPager />
    </Section>
  )
}

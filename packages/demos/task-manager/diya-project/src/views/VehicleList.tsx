import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { component, Get, Section } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Vehicle, vehicleAPI } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

const VehicleListViewProps = req({ vehicleList: readonlyArray(Vehicle) })

export type VehicleListViewProps = TypeOf<typeof VehicleListViewProps>

export const VehicleListView = component(
  VehicleListViewProps,
  ({ vehicleList }) => (
    <Section>
      <HeadTitle>Vehicles</HeadTitle>
      <CreateLink to="/vehicles/add">Add Vehicle</CreateLink>

      <CrudTable
        data={vehicleList}
        headers={[
          'name',
          'numberPlate',
          'group',
          'nextService',
          'insuranceDue',
          'vehicleStatus',
        ]}
        editURL={v => `vehicles/${v.id}/edit`}
      />

      <StaticPagination />
    </Section>
  ),
)

export const VehicleList: React.FC = () => (
  <Get asyncFn={() => vehicleAPI.many()}>
    {data => <VehicleListView vehicleList={data} />}
  </Get>
)

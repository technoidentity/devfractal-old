import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Vehicle } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

const VehicleListProps = req({ vehicleList: readonlyArray(Vehicle) })

export const VehicleList = component(VehicleListProps, ({ vehicleList }) => (
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
))

import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ButtonsGroup,
  component,
  Get,
  Section,
  SimpleTable,
  Title,
} from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Vehicle, vehicleAPI } from '../common'
import { Actions } from './Actions'
import { StaticPagination } from './Pagination'

const VehicleListProps = req({ vehicleList: readonlyArray(Vehicle) })

export type VehicleListProps = TypeOf<typeof VehicleListProps>

export const VehicleListForm = component(
  VehicleListProps,
  ({ vehicleList }) => (
    <>
      <ButtonsGroup alignment="right">
        <Link to="/vehicles/add" className="button is-primary">
          Add Vehicle
        </Link>
      </ButtonsGroup>
      <SimpleTable
        data={vehicleList}
        headers={[
          'name',
          'numberPlate',
          'group',
          'nextService',
          'insuranceDue',
          'vehicleStatus',
          'Actions',
        ]}
        striped
      >
        {(key, values) =>
          key === 'Actions' ? (
            <Actions editURL={`vehicles/${values.id}/edit`} />
          ) : // tslint:disable-next-line: no-null-keyword
          null
        }
      </SimpleTable>
    </>
  ),
)

export const VehicleListTable = component(
  VehicleListProps,
  ({ vehicleList }) => (
    <Section>
      <Title size="4" textColor="info">
        Vehicles
      </Title>
      <VehicleListForm vehicleList={vehicleList} />
      <StaticPagination />
    </Section>
  ),
)

export const VehicleList: React.FC = () => (
  <Get asyncFn={() => vehicleAPI.many()}>
    {data => <VehicleListTable vehicleList={data} />}
  </Get>
)

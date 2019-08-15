import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { component, Get, Section } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Driver, driverAPI } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

const DriverListProps = req({ driverList: readonlyArray(Driver) })

export const DriverListView = component(DriverListProps, ({ driverList }) => (
  <Section>
    <HeadTitle>Drivers</HeadTitle>

    <CreateLink to="/drivers/add">Add Driver</CreateLink>

    <CrudTable
      data={driverList}
      headers={['name', 'lastActive', 'shift', 'status', 'Actions']}
      editURL={v => `drivers/${v.id}/edit`}
    />

    <StaticPagination />
  </Section>
))

export const DriverList: React.FC = () => (
  <Get asyncFn={() => driverAPI.many()}>
    {data => <DriverListView driverList={data} />}
  </Get>
)

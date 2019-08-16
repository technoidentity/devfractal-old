import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { Driver, listProps } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

const DriverListProps = listProps(Driver)

export const DriverList = component(DriverListProps, ({ data: driverList }) => (
  <Section>
    <HeadTitle>Drivers</HeadTitle>

    <CreateLink to="/drivers/add">Add Driver</CreateLink>

    <CrudTable
      data={driverList}
      headers={['name', 'lastActive', 'shift', 'status']}
      editURL={v => `drivers/${v.id}/edit`}
    />

    <StaticPagination />
  </Section>
))

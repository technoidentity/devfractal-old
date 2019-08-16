import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { Driver, links, listProps } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

const DriverListProps = listProps(Driver)

const driverLinks = links('drivers')

export const DriverList = component(DriverListProps, ({ data: driverList }) => (
  <Section>
    <HeadTitle>Drivers</HeadTitle>

    <CreateLink to={driverLinks.create}>Add Driver</CreateLink>

    <CrudTable
      data={driverList}
      headers={['name', 'lastActive', 'shift', 'status']}
      editURL={v => driverLinks.edit(v.id)}
    />

    <StaticPagination />
  </Section>
))

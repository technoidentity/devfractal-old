import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Driver } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

const DriverListProps = req({ driverList: readonlyArray(Driver) })

export const DriverList = component(DriverListProps, ({ driverList }) => (
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

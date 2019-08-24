import React from 'react'
import {
  CrudTable,
  links,
  listComponent,
  RoutedPager,
  Section,
} from 'technoidentity-devfractal'
import { Driver } from '../common'
import { CreateLink, HeadTitle } from '../components'

const driverLinks = links('drivers')

export const DriverList = listComponent(Driver, ({ data: driverList }) => (
  <Section>
    <HeadTitle>Drivers</HeadTitle>

    <CreateLink to={driverLinks.create}>Add Driver</CreateLink>

    <CrudTable
      data={driverList}
      headers={['name', 'lastActive', 'shift', 'status']}
      editTo={v => driverLinks.edit(v.id)}
    />

    <RoutedPager />
  </Section>
))

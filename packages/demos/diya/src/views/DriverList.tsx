import React from 'react'
import { Section, v2 } from 'technoidentity-devfractal'
import { Driver } from '../common'
import { CreateLink, HeadTitle } from '../components'

const driverLinks = v2.links('drivers')

export const DriverList = v2.listComponent(Driver, ({ data: driverList }) => (
  <Section>
    <HeadTitle>Drivers</HeadTitle>

    <CreateLink to={driverLinks.create}>Add Driver</CreateLink>

    <v2.CrudTable
      data={driverList}
      headers={['name', 'lastActive', 'shift', 'status']}
      editLink={v => driverLinks.edit(v.id)}
    />

    <v2.RoutedPager />
  </Section>
))

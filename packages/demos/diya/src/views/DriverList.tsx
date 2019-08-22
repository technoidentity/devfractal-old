import React from 'react'
import { component, Section, v2 } from 'technoidentity-devfractal'
import { Driver } from '../common'
import { CreateLink, HeadTitle } from '../components'

const DriverListProps = v2.listProps(Driver)

const driverLinks = v2.links('drivers')

export const DriverList = component(DriverListProps, ({ data: driverList }) => (
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

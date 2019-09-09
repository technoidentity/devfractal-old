import React from 'react'
import {
  CreateLink,
  links,
  listComponent,
  RoutedPager,
  Section,
} from 'technoidentity-devfractal'
import { Driver } from '../common'
import { HeadTitle } from '../components'
import { DiyaTable } from '../components/DiyaTable'

const driverLinks = links('drivers')

export const DriverList = listComponent(Driver, ({ data: driverList }) => (
  <>
    <Section>
      <HeadTitle>Drivers</HeadTitle>

      <CreateLink alignment="right" variant="primary" to={driverLinks.create}>
        Add Driver
      </CreateLink>

      <DiyaTable
        data={driverList}
        headers={['name', 'lastActive', 'shift', 'status']}
        editTo={v => driverLinks.edit(v.id)}
        assignTo={v => `/assignDriver/${v.id}`}
        headerLabels={['name', 'lastActive', 'shift', 'status']}
      />

      <RoutedPager />
    </Section>
  </>
))

import React from 'react'
import {
  CrudTable,
  links,
  listComponent,
  RoutedPager,
  Section,
  Title,
} from 'technoidentity-devfractal'
import { CreateLink } from 'technoidentity-devfractal'
import { Battery } from '../common'

const batteryLinks = links('batteries')

export const BatteryList = listComponent(Battery, ({ data: batteryList }) => (
  <Section>
    <Title size="4" textColor="info">
      Batteries
    </Title>
    <CreateLink alignment="right" variant="primary" to={batteryLinks.create}>
      Add Battery
    </CreateLink>

    <CrudTable
      data={batteryList}
      headers={['name', 'group', 'remainingCycles', 'status']}
      editTo={v => batteryLinks.edit(v.id)}
    />

    <RoutedPager />
  </Section>
))

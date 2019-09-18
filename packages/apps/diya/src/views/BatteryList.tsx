import React from 'react'
import {
  CreateLink,
  links,
  listComponent,
  RoutedPager,
  Section,
  Title,
} from 'technoidentity-devfractal'
import { Battery } from '../common'
import { DiyaTable } from '../components/DiyaTable'

const batteryLinks = links('batteries')

export const BatteryList = listComponent(Battery, ({ data: batteryList }) => (
  <Section>
    <Title size="4" textColor="info">
      Batteries
    </Title>
    <CreateLink alignment="right" variant="primary" to={batteryLinks.create}>
      Add Battery
    </CreateLink>

    <DiyaTable
      data={batteryList}
      headers={['name', 'group', 'remainingCycles', 'status']}
      editTo={v => batteryLinks.edit(v.id)}
      assignTo={v => `assignBattery/${v.id}`}
      labels={['name', 'group', 'remainingCycles', 'status', 'Actions']}
    />

    <RoutedPager />
  </Section>
))

import React from 'react'
import { Section, Title, v2 } from 'technoidentity-devfractal'
import { Battery } from '../common'
import { CreateLink } from '../components'

const batteryLinks = v2.links('batteries')

export const BatteryList = v2.listComponent(
  Battery,
  ({ data: batteryList }) => (
    <Section>
      <Title size="4" textColor="info">
        Batteries
      </Title>
      <CreateLink to={batteryLinks.create}>Add Battery</CreateLink>

      <v2.CrudTable
        data={batteryList}
        headers={['name', 'group', 'remainingCycles', 'status']}
        editLink={v => batteryLinks.edit(v.id)}
      />

      <v2.RoutedPager />
    </Section>
  ),
)

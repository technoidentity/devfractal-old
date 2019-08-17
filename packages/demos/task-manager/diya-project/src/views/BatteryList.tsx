import React from 'react'
import { component, Section, Title } from 'technoidentity-devfractal'
import { Battery } from '../common'
import { CreateLink, CrudTable, StatePager } from '../components'
import { links, listProps } from '../crud'

const BatteryListProps = listProps(Battery)

const batteryLinks = links('batteries')

export const BatteryList = component(
  BatteryListProps,
  ({ data: batteryList }) => (
    <Section>
      <Title size="4" textColor="info">
        Batteries
      </Title>
      <CreateLink to={batteryLinks.create}>Add Battery</CreateLink>

      <CrudTable
        data={batteryList}
        headers={['name', 'group', 'remainingCycles', 'status']}
        editLink={v => batteryLinks.edit(v.id)}
      />

      <StatePager />
    </Section>
  ),
)

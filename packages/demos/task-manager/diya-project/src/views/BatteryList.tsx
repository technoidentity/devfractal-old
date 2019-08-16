import React from 'react'
import { component, Section, Title } from 'technoidentity-devfractal'
import { Battery, listProps } from '../common'
import { CreateLink, CrudTable, StaticPagination } from '../components'

const BatteryListProps = listProps(Battery)

export const BatteryList = component(
  BatteryListProps,
  ({ data: batteryList }) => (
    <Section>
      <Title size="4" textColor="info">
        Batteries
      </Title>
      <CreateLink to="/batteries/add">Add Battery</CreateLink>

      <CrudTable
        data={batteryList}
        headers={['name', 'group', 'remainingCycles', 'status']}
        editURL={v => `batteries/${v.id}/edit`}
      />

      <StaticPagination />
    </Section>
  ),
)

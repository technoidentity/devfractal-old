import { readonlyArray } from 'io-ts'
import React from 'react'
import { component, Section, Title } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Battery } from '../common'
import { CreateLink, CrudTable, StaticPagination } from '../components'

const BatteryListProps = req({ data: readonlyArray(Battery) })

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
        headers={['name', 'group', 'remainingCycles', 'status', 'Actions']}
        editURL={v => `batteries/${v.id}/edit`}
      />

      <StaticPagination />
    </Section>
  ),
)

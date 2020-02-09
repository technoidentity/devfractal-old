import { CrudTable, links, listComponent, Section } from '@stp/devfractal'
import React from 'react'
import { PlanRoute } from '../common'
import { HeadTitle } from '../components'

const planLinks = links('plans')

export const PlanRouteList = listComponent(PlanRoute, ({ data }) => (
  <Section>
    <HeadTitle>Plan Route</HeadTitle>

    <CrudTable
      data={data}
      select={['customerName', 'address', 'contactNumber', 'status']}
      editTo={v => planLinks.edit(v.id)}
    />
  </Section>
))

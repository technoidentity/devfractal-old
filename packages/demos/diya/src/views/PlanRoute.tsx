import React from 'react'
import {
  CrudTable,
  links,
  listComponent,
  Section,
} from 'technoidentity-devfractal'
import { PlanRoute } from '../common'
import { HeadTitle } from '../components'

const planLinks = links('plans')

export const PlanRouteList = listComponent(PlanRoute, ({ data }) => (
  <Section>
    <HeadTitle>Plan Route</HeadTitle>

    <CrudTable
      data={data}
      headers={['customerName', 'address', 'contactNumber', 'status']}
      editTo={v => planLinks.edit(v.id)}
    />
  </Section>
))

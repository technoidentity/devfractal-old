import React from 'react'
import { Section, v2 } from 'technoidentity-devfractal'
import { PlanRoute } from '../common'
import { HeadTitle } from '../components'

const planLinks = v2.links('plans')

export const PlanRouteList = v2.listComponent(PlanRoute, ({ data }) => (
  <Section>
    <HeadTitle>Plan Route</HeadTitle>

    <v2.CrudTable
      data={data}
      headers={['customerName', 'address', 'contactNumber', 'status']}
      editLink={v => planLinks.edit(v.id)}
    />
  </Section>
))

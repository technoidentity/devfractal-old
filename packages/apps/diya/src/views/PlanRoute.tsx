import React from 'react'
import { CrudTable, links, listComponent } from 'srtp-crud'
import { Section } from 'srtp-ui'
import { PlanRoute } from '../common'
import { HeadTitle } from '../components'

const planLinks = links('plans')

export const PlanRouteList = listComponent(PlanRoute, ({ data }) => (
  <Section>
    <HeadTitle>Plan SafeRoute</HeadTitle>

    <CrudTable
      data={data}
      select={['customerName', 'address', 'contactNumber', 'status']}
      editTo={v => planLinks.edit(v.id)}
    />
  </Section>
))

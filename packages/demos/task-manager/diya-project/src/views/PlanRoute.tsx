import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { links, listProps, PlanRoute } from '../common'
import { CrudTable, HeadTitle } from '../components'

const PlanRouteProps = listProps(PlanRoute)

const planLinks = links('plans')

export const PlanRouteList = component(PlanRouteProps, ({ data }) => (
  <Section>
    <HeadTitle>Plan Route</HeadTitle>

    <CrudTable
      data={data}
      headers={['customerName', 'address', 'contactNumber', 'status']}
      editLink={v => planLinks.edit(v.id)}
    />
  </Section>
))

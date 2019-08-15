import { TypeOf } from 'io-ts'
import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { listProps, PlanRoute } from '../common'
import { CrudTable, HeadTitle } from '../components'

const PlanRouteProps = listProps(PlanRoute)

type PlanRouteProps = TypeOf<typeof PlanRouteProps>

export const PlanRouteList = component(PlanRouteProps, ({ data }) => (
  <Section>
    <HeadTitle>Plan Route</HeadTitle>

    <CrudTable
      data={data}
      headers={['customerName', 'address', 'contactNumber', 'status']}
      editURL={v => `plans/${v.id}/edit`}
    />
  </Section>
))

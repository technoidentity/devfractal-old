import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import {
  component,
  Section,
  SimpleTable,
  Title,
} from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Actions, PlanRoute } from '../common'
import { CrudTable, HeadTitle } from '../components'

const PlanRouteProps = req({ data: readonlyArray(PlanRoute) })

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

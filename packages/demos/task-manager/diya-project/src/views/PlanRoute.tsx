import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import {
  component,
  Get,
  Section,
  SimpleTable,
  Title,
} from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { PlanRoute, planRouteAPI } from '../common'
import { Actions } from '../views'

const PlanRouteProps = req({ data: readonlyArray(PlanRoute) })

type PlanRouteProps = TypeOf<typeof PlanRouteProps>

export const PlanRouteView: React.FC<PlanRouteProps> = ({ data }) => (
  <SimpleTable
    data={data}
    headers={['customerName', 'address', 'contactNumber', 'status', 'Actions']}
  >
    {(key, values) =>
      // tslint:disable-next-line: no-null-keyword
      key === 'Actions' ? <Actions editUrl={`plans/${values.ID}/edit`} /> : null
    }
  </SimpleTable>
)

export const PlanRouteList = component(PlanRouteProps, ({ data }) => (
  <Section>
    <Title size="4">Plan Route</Title>
    <PlanRouteView data={data} />
  </Section>
))

export const PlanRouteMap = () => (
  <Get asyncFn={() => planRouteAPI.many()}>
    {data => <PlanRouteList data={data} />}
  </Get>
)

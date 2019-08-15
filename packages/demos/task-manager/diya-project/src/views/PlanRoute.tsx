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
import { Actions, PlanRoute, planRouteAPI } from '../common'

const PlanRouteProps = req({ data: readonlyArray(PlanRoute) })

type PlanRouteProps = TypeOf<typeof PlanRouteProps>

export const PlanRouteView: React.FC<PlanRouteProps> = ({ data }) => (
  <SimpleTable
    data={data}
    headers={['customerName', 'address', 'contactNumber', 'status', 'Actions']}
    striped
  >
    {(key, values) =>
      // tslint:disable-next-line: no-null-keyword
      key === 'Actions' ? <Actions editURL={`plans/${values.id}/edit`} /> : null
    }
  </SimpleTable>
)

export const PlanRouteList = component(PlanRouteProps, ({ data }) => (
  <Section>
    <Title size="4" textColor="info">
      Plan Route
    </Title>
    <PlanRouteView data={data} />
  </Section>
))

export const PlanRouteMap = () => (
  <Get asyncFn={() => planRouteAPI.many()}>
    {data => <PlanRouteList data={data} />}
  </Get>
)

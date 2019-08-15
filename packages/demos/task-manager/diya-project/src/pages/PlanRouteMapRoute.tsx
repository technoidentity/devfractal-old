import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { planRouteAPI } from '../common'
import { PlanRouteList } from './PlanRoute'

export const PlanRouteMapRoute = () => (
  <Get asyncFn={() => planRouteAPI.many()}>
    {data => <PlanRouteList data={data} />}
  </Get>
)

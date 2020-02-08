import React from 'react'
import { All, paths } from 'technoidentity-devfractal'
import { planRouteAPI } from '../common'
import { PlanRouteList } from '../views'

const ps = paths('plan_routes')

export const PlanRouteMapRoute = () => (
  <All api={planRouteAPI} list={PlanRouteList} path={ps.list} />
)

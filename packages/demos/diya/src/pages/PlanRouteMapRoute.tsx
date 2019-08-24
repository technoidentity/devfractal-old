import React from 'react'
import { v2 } from 'technoidentity-devfractal'
import { planRouteAPI } from '../common'
import { PlanRouteList } from '../views'

const paths = v2.paths('plan_routes')

export const PlanRouteMapRoute = () => (
  <v2.All api={planRouteAPI} list={PlanRouteList} path={paths.list} />
)

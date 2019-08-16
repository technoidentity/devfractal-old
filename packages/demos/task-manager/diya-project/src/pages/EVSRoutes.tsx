import React from 'react'
import { SimpleGet, SimplePost } from 'technoidentity-devfractal'
import { evAPI, paths } from '../common'
import { EVSList, RaiseRequestForm } from '../views'

const evsPaths = paths('evs')

const RaiseRequestRoute: React.FC = () => (
  <SimplePost
    path={evsPaths.create}
    api={evAPI}
    redirectPath={evsPaths.list}
    component={RaiseRequestForm}
  />
)

const EVSAssignedRoute = () => (
  <SimpleGet path={evsPaths.list} api={evAPI} component={EVSList} />
)

export const EVSRoutes = () => (
  <>
    <EVSAssignedRoute />
    <RaiseRequestRoute />
  </>
)

import React from 'react'
import { SimpleGet, SimplePost } from 'technoidentity-devfractal'
import { evAPI } from '../common'
import { EVSList, RaiseRequestForm } from '../views'

const RaiseRequestRoute: React.FC = () => (
  <SimplePost
    path="/evs/add"
    api={evAPI}
    redirectPath="/evs"
    component={RaiseRequestForm}
  />
)

const EVSAssignedRoute = () => (
  <SimpleGet path="/evs" api={evAPI} component={EVSList} />
)

export const EVSRoutes = () => (
  <>
    <EVSAssignedRoute />
    <RaiseRequestRoute />
  </>
)

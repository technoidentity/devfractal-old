import React from 'react'
import { v2 } from 'technoidentity-devfractal'
import { evAPI } from '../common'
import { EVSList, RaiseRequestForm } from '../views'

const paths = v2.paths('employees')
const links = v2.links('employees')

const RaiseRequestRoute: React.FC = () => (
  <v2.Create
    path={paths.create}
    api={evAPI}
    form={RaiseRequestForm}
    redirectTo={links.list}
  />
)

const EVSAssignedRoute = () => (
  <v2.All
    path={paths.list}
    api={evAPI}
    list={EVSList}
    editTo={links.edit}
    createTo={links.create}
  />
)

export const EVSRoutes = () => (
  <>
    <EVSAssignedRoute />
    <RaiseRequestRoute />
  </>
)

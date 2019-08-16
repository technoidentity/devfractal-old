import React from 'react'
import { SimpleGet, SimplePost, SimplePut } from 'technoidentity-devfractal'
import { clientAPI, paths } from '../common'
import { ClientForm, ClientList } from '../views'

const clientPaths = paths('clients')

const ClientRoute = () => (
  <SimplePost
    path={clientPaths.create}
    api={clientAPI}
    redirectPath={clientPaths.list}
    component={ClientForm}
  />
)

const ClientListRoute = () => (
  <SimpleGet path={clientPaths.list} api={clientAPI} component={ClientList} />
)

const EditClientRoute = () => (
  <SimplePut
    path={clientPaths.edit}
    component={ClientForm}
    api={clientAPI}
    redirectPath={clientPaths.list}
  />
)

export const ClientRoutes = () => (
  <>
    <ClientListRoute />
    <EditClientRoute />
    <ClientRoute />
  </>
)

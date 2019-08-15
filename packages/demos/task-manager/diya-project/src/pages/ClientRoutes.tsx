import React from 'react'
import { SimpleGet, SimplePost, SimplePut } from 'technoidentity-devfractal'
import { clientAPI } from '../common'
import { ClientForm, ClientList } from '../views'

const ClientRoute = () => (
  <SimplePost
    path="/clients/add"
    api={clientAPI}
    redirectPath="/clients"
    component={ClientForm}
  />
)

const ClientListRoute = () => (
  <SimpleGet path="/clients" api={clientAPI} component={ClientList} />
)

const EditClientRoute = () => (
  <SimplePut
    path="/clients/:id/edit"
    component={ClientForm}
    api={clientAPI}
    redirectPath="/clients"
  />
)

export const ClientRoutes = () => (
  <>
    <ClientListRoute />
    <EditClientRoute />
    <ClientRoute />
  </>
)

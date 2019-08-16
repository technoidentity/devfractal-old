import React from 'react'
import { SimpleGet, SimplePost, SimplePut } from 'technoidentity-devfractal'
import { clientAPI, paths } from '../common'
import { ClientForm, ClientList } from '../views'

const { create, edit, list } = paths('clients')

const ClientRoute = () => (
  <SimplePost
    path={create}
    api={clientAPI}
    redirectPath={list}
    component={ClientForm}
  />
)

const ClientListRoute = () => (
  <SimpleGet path={list} api={clientAPI} component={ClientList} />
)

const EditClientRoute = () => (
  <SimplePut
    path={edit}
    component={ClientForm}
    api={clientAPI}
    redirectPath={list}
  />
)

export const ClientRoutes = () => (
  <>
    <ClientListRoute />
    <EditClientRoute />
    <ClientRoute />
  </>
)

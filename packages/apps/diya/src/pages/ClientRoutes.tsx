import React from 'react'
import {
  Get,
  paths,
  Post,
  Put,
  Route,
  useMatch,
} from 'technoidentity-devfractal'
import { string, type } from 'technoidentity-utils'
import { postAssignForm } from '.'
import {
  cargosUrl,
  clientAPI,
  ClientData,
  ClientListResponse,
  ClientResponse,
} from '../common'
import { toastMessage } from '../components/Message'
import { ClientForm, ClientList } from '../views'
import { AssignClientForm } from '../views/AssignClient'

const ps = paths(clientAPI.resource)

export async function getClientList(): Promise<
  ClientListResponse['data']['rows']
> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'clients' },
      ClientListResponse,
    )
    return drivers.data.rows
  } catch (error) {
    throw Error(error)
  }
}
export async function getClient(id: string): Promise<ClientResponse['data']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'clients', path: id },
      ClientResponse,
    )
    return drivers.data
  } catch (error) {
    throw Error(error)
  }
}

async function putClient(data: ClientData): Promise<ClientResponse['data']> {
  try {
    const drivers = await cargosUrl().put(
      { resource: 'clients' },
      data,
      ClientResponse,
    )
    toastMessage('Client Updated')
    return drivers.data
  } catch (error) {
    toastMessage('fail')
    throw Error(error)
  }
}

async function postClient(data: ClientData): Promise<ClientResponse['data']> {
  try {
    const user = await cargosUrl().post(
      { resource: 'clients' },
      data,
      ClientResponse,
    )
    toastMessage('Client Added')
    return user.data
  } catch (error) {
    toastMessage('fail')
    throw Error(error)
  }
}

const ClientListRoute = () => (
  <Get asyncFn={getClientList} component={ClientList} />
)

const ClientAdd = () => (
  <Post redirectTo={ps.list} component={ClientForm} onPost={postClient} />
)

const ClientEdit = () => {
  const { params } = useMatch(type({ [clientAPI.idKey]: string }))
  return (
    <Put
      id={params[clientAPI.idKey as string] as any}
      doGet={getClient}
      onPut={(_id, data) => putClient(data)}
      component={ClientForm}
      redirectTo={ps.list}
    />
  )
}

const ClientAssignRoute = () => {
  return (
    <Post
      redirectTo={ps.list}
      component={AssignClientForm}
      onPost={postAssignForm}
    />
  )
}

export const ClientRoutes = () => (
  <>
    <Route path={ps.create} render={() => <ClientAdd />} />
    <Route path={ps.list} render={() => <ClientListRoute />} />
    <Route path={ps.edit} render={() => <ClientEdit />} />
    <Route
      path="/clients/assignClient/:id"
      render={() => <ClientAssignRoute />}
    />
  </>
)

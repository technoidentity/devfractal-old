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
import {
  cargosUrl,
  clientAPI,
  ClientData,
  ClientListResponse,
  ClientResponse,
} from '../common'
import { ClientForm, ClientList } from '../views'

// export const ClientRoutes = () => (
//   <CrudRoutes api={clientAPI} form={ClientForm} list={ClientList} />
// )

const ps = paths(clientAPI.resource)
// const ls = links(driverAPI.resource)

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
async function getClient(id: string): Promise<ClientResponse['data']> {
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
    return drivers.data
  } catch (error) {
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
    return user.data
  } catch (error) {
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

export const ClientRoutes = () => (
  <>
    <Route path={ps.create} render={() => <ClientAdd />} />
    <Route path={ps.list} render={() => <ClientListRoute />} />
    <Route path={ps.edit} render={() => <ClientEdit />} />
  </>
)

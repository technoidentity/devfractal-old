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
import { useAuth } from '../auth/AuthContext'
import {
  cargosUrl,
  clientAPI,
  ClientData,
  ClientListResponse,
  ClientResponse,
  sessionExpire,
} from '../common'
import { toastMessage } from '../components/Message'
import { ClientForm, ClientList } from '../views'
import { AssignClientForm } from '../views/AssignClient'

const ps = paths(clientAPI.resource)

export async function getClientList({
  setUser,
  logout,
  setHeaderText,
}: any): Promise<ClientListResponse['data']['rows']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'clients' },
      ClientListResponse,
    )
    setHeaderText('Clients')
    return drivers.data.rows
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    setHeaderText(undefined)
    throw Error(error)
  }
}
export async function getClient(
  id: string,
  { setUser, logout }: any,
): Promise<ClientResponse['data']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'clients', path: id },
      ClientResponse,
    )
    return drivers.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    throw Error(error)
  }
}

async function putClient(
  data: ClientData,
  { setUser, logout }: any,
): Promise<ClientResponse['data']> {
  try {
    const drivers = await cargosUrl().put(
      { resource: 'clients' },
      data,
      ClientResponse,
    )
    toastMessage('success', 'Client Updated')
    return drivers.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail', error.response.data.errors)
    throw Error(error)
  }
}

async function postClient(
  data: ClientData,
  { setUser, logout }: any,
): Promise<ClientResponse['data']> {
  try {
    const user = await cargosUrl().post(
      { resource: 'clients' },
      data,
      ClientResponse,
    )
    toastMessage('success', 'Client Added')
    return user.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail', error.response.data.errors)
    throw Error(error)
  }
}

const ClientListRoute = ({ setUser, logout, setHeaderText }: any) => (
  <Get
    asyncFn={() => getClientList({ setUser, logout, setHeaderText })}
    component={ClientList}
  />
)

const ClientAdd = ({ setUser, logout }: any) => (
  <Post
    redirectTo={ps.list}
    component={ClientForm}
    onPost={data => postClient(data, { setUser, logout })}
  />
)

const ClientEdit = ({ setUser, logout }: any) => {
  const { params } = useMatch(type({ [clientAPI.idKey]: string }))
  return (
    <Put
      id={params[clientAPI.idKey as string] as any}
      doGet={id => getClient(id as string, { setUser, logout })}
      onPut={(_id, data) => putClient(data, { setUser, logout })}
      component={ClientForm}
      redirectTo={ps.list}
    />
  )
}

const ClientAssignRoute = ({ setUser, logout }: any) => {
  return (
    <Post
      redirectTo={ps.list}
      component={AssignClientForm}
      onPost={data => postAssignForm(data, { setUser, logout })}
    />
  )
}

export const ClientRoutes = () => {
  const { logout, setUser, setHeaderText } = useAuth()
  return (
    <>
      <Route
        path={ps.create}
        render={() => <ClientAdd setUser={setUser} logout={logout} />}
      />
      <Route
        path={ps.list}
        render={() => (
          <ClientListRoute
            setUser={setUser}
            logout={logout}
            setHeaderText={setHeaderText}
          />
        )}
      />
      <Route
        path={ps.edit}
        render={() => <ClientEdit setUser={setUser} logout={logout} />}
      />
      <Route
        path="/clients/assignClient/:id"
        render={() => <ClientAssignRoute setUser={setUser} logout={logout} />}
      />
    </>
  )
}

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
import { useAuth } from '../auth/AuthContext'
import {
  cargosUrl,
  sessionExpire,
  userAPI,
  UserData,
  UserData as UD,
  UserEdit as UE,
  userEditAPI,
  UserListResponse,
  UserResponse,
} from '../common'
import { toastMessage } from '../components/Message'
import { UserForm, UserList } from '../views'

const ps = paths(userAPI.resource)

export async function getUserList({
  setUser,
  logout,
  setHeaderText,
}: any): Promise<UserListResponse['data']['rows']> {
  try {
    const users = await cargosUrl().get({ resource: 'users' }, UserListResponse)
    setHeaderText('Users')
    return users.data.rows
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    setHeaderText(undefined)
    throw Error(error)
  }
}
async function getUser(
  id: string,
  { setUser, logout }: any,
): Promise<UE['data']> {
  try {
    const users = await cargosUrl().get({ resource: 'users', path: id }, UE)
    return users.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    throw Error(error)
  }
}

async function putUser(
  data: UserData,
  { setUser, logout }: any,
): Promise<UE['data']> {
  try {
    const users = await cargosUrl().put({ resource: 'users' }, data, UE)
    toastMessage('success', 'User Updated')
    return users.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail', error.response.data.errors)
    throw Error(error)
  }
}

async function postUser(
  data: UD,
  { setUser, logout }: any,
): Promise<UserResponse['data']> {
  try {
    const user = await cargosUrl().post(
      { resource: 'users' },
      data,
      UserResponse,
    )
    toastMessage('success', 'User Added')
    return user.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail', error.response.data.errors)
    throw Error(error)
  }
}

const UserListRoute = ({ setUser, logout, setHeaderText }: any) => (
  <Get
    asyncFn={() => getUserList({ setUser, logout, setHeaderText })}
    component={UserList}
  />
)
const UserAdd = ({ setUser, logout }: any) => (
  <Post
    redirectTo="/users"
    component={UserForm}
    onPost={data => postUser(data, { setUser, logout })}
  />
)

const UserEdit = ({ setUser, logout }: any) => {
  const { params } = useMatch(type({ [userEditAPI.idKey]: string }))
  return (
    <Put
      id={params[userEditAPI.idKey as string] as any}
      doGet={id => getUser(id as string, { setUser, logout })}
      onPut={(_id, data) => putUser(data, { setUser, logout })}
      component={UserForm}
      redirectTo="/users"
    />
  )
}

export const UserRoutes = () => {
  const { logout, setUser, setHeaderText } = useAuth()
  return (
    <>
      <Route
        path={ps.create}
        render={() => <UserAdd setUser={setUser} logout={logout} />}
      />
      <Route
        path={ps.list}
        render={() => (
          <UserListRoute
            setUser={setUser}
            logout={logout}
            setHeaderText={setHeaderText}
          />
        )}
      />
      <Route
        path={ps.edit}
        render={() => <UserEdit setUser={setUser} logout={logout} />}
      />
    </>
  )
}

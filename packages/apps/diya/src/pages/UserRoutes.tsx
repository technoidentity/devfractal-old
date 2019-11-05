import React from 'react'
import {
  Create,
  Get,
  http as httpAPI,
  links,
  paths,
  Put,
  Route,
  useMatch,
} from 'technoidentity-devfractal'
import { string, type } from 'technoidentity-utils'
import {
  AuthUserInfo,
  userAdd,
  userAPI,
  UserData,
  UserEdit as UE,
  userEditAPI,
  UserResponse,
} from '../common'
import { baseURL } from '../config'
import { UserForm, UserList } from '../views'

const ps = paths(userAPI.resource)
const ls = links(userAPI.resource)

async function getUserList(): Promise<UserResponse['data']['rows']> {
  const userData = localStorage.getItem('loginData')
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const users = await http.get({ resource: 'users' }, UserResponse)
    return users.data.rows
  }
  throw Error('Invalid login')
}
async function getUser(id: string): Promise<UE['data']> {
  const userData = localStorage.getItem('loginData')

  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const users = await http.get({ resource: 'users', path: id }, UE)
    return users.data
  }
  throw Error('Invalid login')
}

async function putUser(data: UserData): Promise<UE['data']> {
  const userData = localStorage.getItem('loginData')

  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const users = await http.put({ resource: 'users' }, data, UE)
    return users.data
  }
  throw Error('Invalid login')
}

const UserListRoute = () => <Get asyncFn={getUserList} component={UserList} />
const UserAdd = () => (
  <Create path={ps.create} api={userAdd} form={UserForm} redirectTo={ls.list} />
)

const UserEdit = () => {
  const { params } = useMatch(type({ [userEditAPI.idKey]: string }))
  return (
    <Put
      id={params[userEditAPI.idKey as string] as any}
      doGet={getUser}
      onPut={(_id, data) => putUser(data)}
      component={UserForm}
      redirectTo="/users"
    />
  )
}

export const UserRoutes = () => (
  <>
    <UserAdd />
    <Route path="/users" render={() => <UserListRoute />} />
    <Route path={ps.edit} render={() => <UserEdit />} />
  </>
)

import React from 'react'
import {
  Get,
  http as httpAPI,
  paths,
  Post,
  Put,
  Route,
  useMatch,
} from 'technoidentity-devfractal'
import { string, type } from 'technoidentity-utils'
import {
  AuthUserInfo,
  userAPI,
  UserData,
  UserData as UD,
  UserEdit as UE,
  userEditAPI,
  UserListResponse,
  UserResponse,
} from '../common'
import { baseURL } from '../config'
import { UserForm, UserList } from '../views'

const ps = paths(userAPI.resource)

async function getUserList(): Promise<UserListResponse['data']['rows']> {
  const userData = localStorage.getItem('loginData')
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const users = await http.get({ resource: 'users' }, UserListResponse)
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

async function postUser(data: UD): Promise<UserResponse['data']> {
  const userData = localStorage.getItem('loginData')
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const user = await http.post({ resource: 'users' }, data, UserResponse)
    return user.data
  }
  throw Error('Invalid login')
}

const UserListRoute = () => <Get asyncFn={getUserList} component={UserList} />
const UserAdd = () => (
  <Post redirectTo="/users" component={UserForm} onPost={postUser} />
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
    <Route path={ps.create} render={() => <UserAdd />} />
    <Route path={ps.list} render={() => <UserListRoute />} />
    <Route path={ps.edit} render={() => <UserEdit />} />
  </>
)

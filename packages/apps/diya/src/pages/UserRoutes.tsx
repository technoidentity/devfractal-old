import React from 'react'
import {
  Get,
  http as httpAPI,
  paths,
  Post,
  Route,
} from 'technoidentity-devfractal'
import {
  AuthUserInfo,
  userAPI,
  UserData as UD,
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

const UserAdd = () => (
  <Post redirectTo="/users" component={UserForm} onPost={postUser} />
)

const UserListRoute = () => <Get asyncFn={getUserList} component={UserList} />

export const UserRoutes = () => (
  <>
    <Route path={ps.create} render={() => <UserAdd />} />
    <Route path="/users" render={() => <UserListRoute />} />
  </>
)

import React from 'react'
import { Get, http as httpAPI, Route } from 'technoidentity-devfractal'
import { AuthUserInfo, UserResponse } from '../common'
import { baseURL } from '../config'
import { UserList } from '../views'

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

const UserListRoute = () => <Get asyncFn={getUserList} component={UserList} />

export const UserRoutes = () => (
  <>
    <Route path="/users" render={() => <UserListRoute />} />
  </>
)

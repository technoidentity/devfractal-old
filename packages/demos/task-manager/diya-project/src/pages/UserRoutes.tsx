import React from 'react'
import { SimpleGet, SimplePost, SimplePut } from 'technoidentity-devfractal'
import { userAPI } from '../common'
import { UserForm, UserList } from '../views'

const UserRoute: React.FC = () => (
  <SimplePost
    path="/users/add"
    api={userAPI}
    redirectPath="/users"
    component={UserForm}
  />
)

const UserListRoute: React.FC = () => (
  <SimpleGet api={userAPI} path="/users" component={UserList} />
)

const EditUserRoute = () => (
  <SimplePut
    path="/users/:id/edit"
    api={userAPI}
    component={UserForm}
    redirectPath="/users"
  />
)

export const UserRoutes = () => (
  <>
    <UserListRoute />
    <EditUserRoute />
    <UserRoute />
  </>
)
